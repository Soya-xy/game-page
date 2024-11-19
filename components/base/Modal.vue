<script setup lang="ts">
import {
  Dialog,
  DialogContent,
} from '~/components/ui/dialog'

const { path } = useModal()
const enterAnimation = ref(0)
const is = ref()

watch(path, (val) => {
  if (val) {
    is.value = defineAsyncComponent({
      loader: () => {
        return import(`..${path.value!.replace(/([A-Z])/g, '/$1')}.vue`)
      },
      delay: 200,
      timeout: 10000,
      suspensible: false,
    })
    enterAnimation.value = 1
  }
})

function closeModal() {
  enterAnimation.value = 2
  setTimeout(() => {
    path.value = undefined
    enterAnimation.value = 0
  }, 5000)
}
</script>

<template>
  <Dialog :open="!!path">
    <DialogContent
      class="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border sm:rounded-lg bg-background shadow-lg"
      :class="{
        'opacity-0': enterAnimation === 0,
        'DialogContentOpen': enterAnimation === 1,
        'DialogContentClosed': enterAnimation === 2,
      }"
      @close="closeModal"
    >
      <component :is="is" />
    </DialogContent>
  </Dialog>
</template>
