<script lang="ts" setup>
import type { GachaponTask } from '~/api/gachapon/type'
import { receiveTaskReward } from '~/api/gachapon'

type Task = GachaponTask & { loading: boolean }

const task = defineProp<GachaponTask[]>(undefined, true)

const taskList = ref<Task[]>()
const count = defineProp<number>()
const claim = defineEmit()
const close = defineEmit()

watch(task, () => {
  taskList.value = task.value.map(item => ({ ...item, loading: false }))
}, {
  immediate: true,
  deep: true,
})

async function openTask(item: Task) {
  try {
    item.loading = true
    await receiveTaskReward(item.id)
    claim()
  }
  catch (e) {
    console.error(e)
  }
  finally {
    item.loading = false
  }
}
</script>

<template>
  <div class="bg-[--bc-activeColor5] text-white font-bold h-[55px] flex items-center justify-center relative shrink-0 rounded-t-[10px]">
    Request Opportunity <div class="h-full px-[20px] absolute top-0 right-0 flex items-center justify-center">
      <i class="inline-block md:hidden h-[max-content] w-[max-content] icon-new-clean-3 text-[15px] text-white" @click="close" />
    </div>
  </div>
  <div class="text-font flex-1 flex flex-col overflow-hidden bg-white w-full px-[15px] rounded-b-[10px] md:px-[40px]">
    <div class="mt-[15px] mb-[10px] text-font text-[16px] font-bold">
      Current Tickets: {{ count }}
    </div>
    <div class="space-y-[10px] w-full overflow-y-auto pb-[20px]">
      <div
        v-for="(item, idx) in taskList" :key="idx"
        class="h-[80px] bg-color-activity-15 border-radius-0 relative flex justify-between items-center pl-[20px] pr-[10px]"
      >
        <div>
          <h3 class="text-[14px] font-bold">
            {{ item.taskName }}
          </h3>
          <p class="text-[12px] text-font mt-[6px] font-medium">
            Tickets <span class="font-bold">×1</span>
          </p>
        </div>
        <BaseButton
          class="h-[40px] shrink-0 border-radius-0 text-font font-bold text-[12px] w-[29.3vw] md:w-[120px]"
          :loading="item.loading" :class="{
            'bg-active': !item.completed && !item.receive,
            'bg-color-linear-24 text-[--bc-textColor3]': item.completed,
          }" @click="openTask(item)"
        >
          {{ item.completed ? 'Claim' : (item.receive ? 'Obtained' : 'Open') }}
        </BaseButton>

        <div class="w-[12px] h-full py-[10px] absolute top-0 right-[35%] flex items-center justify-center">
          <div class="w-[12px] h-[12px] absolute -top-[6px] left-0 rounded-full bg-[#fff] z-[2]" />
          <div class="w-[12px] h-[12px] absolute -bottom-[6px] left-0 rounded-full bg-[#fff] z-[2]" />
          <div class="w-[2px] h-[60px] z-[2] border-dotted border-l-[1px] border-[#fff]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
