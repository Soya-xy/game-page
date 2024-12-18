<script lang="ts" setup>
import type { ResourceConfig } from '~/api/help/type'
import { resourceUrl } from '~/api/help'

const show = defineModel<boolean>('show', {
  required: true,
})

const { data } = useAPI<ResourceConfig[]>(resourceUrl, {
  params: {
    resourceCategory: 'contact',
  },
})
</script>

<template>
  <BaseModal v-model:show="show" content-class="mx-auto min-w-[444px] max-w-[1414px] px-32px">
    <div class="flex-1 flex flex-col overflow-y-auto text-center px-[12px] pb-[24px] bg-color">
      <div class="font-bold text-white text-[20px] mb-[24px] mt-[40px]">
        Invite friends
      </div>
      <div class="font-bold text-white text-[18px] mb-[24px]">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/share_icon.png"
          alt="" importance="auto" class="mx-auto !h-[166px]"
        />
        <div>
          Invite a friend to get spins.
        </div>
        <div class="text-active">
          Withdraw <span class="whitespace-pre">R$100.00</span>
        </div>
      </div>
      <div class="flex flex-col gap-y-[16px] mb-[24px]">
        <div class="flex items-center gap-x-[8px] text-[12px]">
          <hr class="h-[1px] flex-1 border-[--bc-tabColor]"> Share
          <hr class="h-[1px] flex-1 border-[--bc-tabColor]">
        </div>
        <ul class="grid grid-cols-4 gap-y-[30px]">
          <li v-for="item in data" :key="item.id" class="text-center">
            <Image :src="item.configValue" alt="" importance="auto" class="mx-auto !h-[56px]" />
          </li>
        </ul>
      </div>
      <div class="flex flex-col text-left gap-y-[6px]">
        <div class="text-[12px] text-e-g-color-20 text-[12px]">
          Share your referral link:
        </div>
        <div
          class="pl-[10px] pr-[5px] h-[40px] w-[100%] flex justify-between items-center gap-x-[10px] border-radius-0 bg-color border-[1px] border-solid border-[--bc-transparentColor] cursor-pointer"
        >
          <span class="text-white flex-1 truncate text-[12px] font-bold text-left">https://afun.com.br/a/9bnnse</span>
          <button class="w-[30px] h-[30px] bg-[--bc-bgColor7] border-radius-0">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-dl-copy cursor-pointer text-white text-[16px]"
            />
          </button>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<style></style>
