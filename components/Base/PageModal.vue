<script setup lang="ts">
import {
  PageDialog as Dialog,
  PageDialogContent as DialogContent,
} from '~/components/PageDialog'

const { router } = useModal()
const enterAnimation = ref(0)
const show = ref(false)
const is = shallowRef()
const RouteToComponent: Record<string, any> = {
  '/login': import('~/components/Login/Index.client.vue'),
  '/register': import('~/components/Register/Index.vue'),
  '/gametag/hot': import('~/components/Base/Game/More.vue'),
  '/profile': import('~/components/Profile/Index.vue'),
}

watch(router, (val) => {
  if (val.path) {
    is.value = defineAsyncComponent({
      loader: () => RouteToComponent[val.path!],
      delay: 200,
      timeout: 10000,
      suspensible: false,
    })

    show.value = true

    enterAnimation.value = 1
  }
  else {
    enterAnimation.value = 2
    setTimeout(() => {
      show.value = false
      enterAnimation.value = 0
    }, 300)
  }
}, {
  deep: true,
})

const routerPush = useRouter()

function closeModal() {
  enterAnimation.value = 2
  setTimeout(() => {
    router.value = {
      path: undefined,
    }
    show.value = false
    enterAnimation.value = 0
    routerPush.back()
  }, 300)
}
</script>

<template>
  <Dialog v-model:open="show" modal>
    <DialogContent
      class="fixed left-1/2 top-1/2 z-[500] grid min-w-[500px] min-h-[500px] max-h-[100vh] -translate-x-1/2 -translate-y-1/2 gap-4 border sm:rounded-lg shadow-lg  bg-color2"
      disable-outside-pointer-events
      :class="{
        'opacity-0': enterAnimation === 0,
        'DialogContentOpen': enterAnimation === 1,
        'DialogContentClosed': enterAnimation === 2,
      }"
      @close="closeModal"
    >
      <component :is="is" v-if="enterAnimation !== 0" v-bind="router" />
    </DialogContent>
  </Dialog>
</template>
