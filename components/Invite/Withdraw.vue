<script lang="ts" setup>
const show = defineModel<boolean>('show', {
  required: true,
})
</script>

<template>
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[444px] max-w-[1414px] px-32px">
    <div class="h-[max-content] flex flex-col m-auto bg-color border-radius-1 overflow-hidden text-[14px] w-[480px]">
      <div class="px-[12px] pb-[24px] pt-[10px] mt-[40px]">
        <div class="text-center mb-[15px]">
          <p class="text-[20px] font-bold text-white mb-[10px]">
            Accumulated
          </p><span class="whitespace-pre text-active text-[40px] font-bold">R$94.32</span>
          <div class="flex justify-between text-[14px] text-color mt-[22px]">
            <span>Payment Method</span><span>Cash</span>
          </div>
        </div>
        <div class="bg-color2 px-[20px] pt-[17px] pb-[30px] border-radius-0 relative">
          <ul
            class="flex flex-col justify-center items-center absolute flex-1 h-full pt-[24px] pb-[42px] left-[20px] top-0 bottom-0 my-auto z-[0]"
          >
            <div class="w-[16px] h-[16px] flex items-center justify-center bg-[--bc-noActiveColor2] rounded-full">
              <div class="w-[8px] h-[8px] bg-active rounded-full" />
            </div>
            <li class="w-[2px] bg-[--bc-noActiveColor2] flex-1 relative" />
            <div class="w-[16px] h-[16px] flex items-center justify-center bg-[--bc-noActiveColor2] rounded-full">
              <div class="w-[8px] h-[8px] bg-active rounded-full" />
            </div>
            <li class="w-[2px] flex-1 bg-[--bc-color20]" />
            <div class="w-[8px] h-[8px] bg-[--bc-color20] rounded-full" />
          </ul>
          <ul class="text-white flex flex-col gap-y-[24px]">
            <li class="min-h-[30px] flex items-center pl-[35px]">
              Withdrawal
              Submitted.
            </li>
            <li class="min-h-[30px] flex items-center pl-[35px]">
              R$5.68 more for
              withdrawal.
            </li>
            <li class="min-h-[30px] flex items-center pl-[35px] text-color">
              Received R$100.00
            </li>
          </ul>
        </div>
        <button
          class="flex items-center justify-center w-full bg-button-linear border-radius-0 text-[12px] font-bold text-font min-h-[40px] mt-[10px]"
        >
          Invite
          friends to help
        </button>
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
