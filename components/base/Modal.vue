<script setup lang="ts">
import {
  Dialog,
  DialogContent,
} from '~/components/ui/pageDialog'

const { path } = useModal()
const enterAnimation = ref(0)
const show = ref(false)
const is = shallowRef()

watch(path, (val) => {
  console.log('🚀 ~ watch ~ val:', val)
  if (val) {
    is.value = defineAsyncComponent({
      loader: () => {
        return import(`..${path.value!.replace(/([A-Z])/g, '/$1')}.vue`)
      },
      delay: 200,
      timeout: 10000,
      suspensible: false,
    })
    show.value = true

    enterAnimation.value = 1
  }
})

function closeModal() {
  enterAnimation.value = 2
  setTimeout(() => {
    path.value = undefined
    show.value = false
    enterAnimation.value = 0
  }, 300)
}
</script>

<template>
  <Dialog v-model:open="show" modal>
    <DialogContent
      class="fixed left-1/2 top-1/2 z-[500] grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border sm:rounded-lg bg-background shadow-lg"
      disable-outside-pointer-events :class="{
        'opacity-0': enterAnimation === 0,
        'DialogContentOpen': enterAnimation === 1,
        'DialogContentClosed': enterAnimation === 2,
      }" @close="closeModal"
    >
      <component :is="is" />
    </DialogContent>
  </Dialog>
</template>
