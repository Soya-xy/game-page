<script setup lang="ts">
import { asyncFeedBackCreate } from '~/api/help'
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const val = ref<string>()

async function submit() {
  if (val.value) {
    await asyncFeedBackCreate({
      userId: userInfo.value?.id as number,
      feedbackContent: val.value,
    })
    toast({
      description: 'Successful',
      duration: 2000,
      class: 'my-toast',
    })
  }
}
</script>

<template>
  <div class="flex-1 flex flex-col p-[15px]">
    <div>
      <div class="flex justify-between items-center mb-[10px]">
        <div class="text-white font-bold text-[16px] capitalize">
          Popular Questions
        </div>
        <div class="text-[--bc-activeColor] font-bold text-[12px]">
          More
        </div>
      </div>
    </div>
    <div class="bg-color-4 border-radius-0 mb-[15px]" />
    <div>
      <div class="flex items-center mb-[10px]">
        <div class="text-white font-bold text-[16px] capitalize">
          Feedback and Suggestions
        </div>
      </div>
      <div class="p-[10px] pb-[25px] relative  w-full border-radius-0 text-[12px] mb-[10px]">
        <textarea
          v-model="val" placeholder="Enter Online Customer Service" rows="6"
          class="w-full text-white bg-[--bc-searchColor]" maxlength="500"
        />
        <div class="absolute bottom-[10px] right-[10px]">
          {{ val?.length || 0 }}/500
        </div>
      </div>
      <button
        class="bg-[--bc-activeColor] text-[--bc-fontColor] font-bold text-[14px] shrink-0 w-full border-radius-0 h-[40px] whitespace-pre-wrap"
        @click="submit"
      >
        Confirm
      </button>
    </div>
  </div>
</template>
