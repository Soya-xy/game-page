<script lang="ts" setup>
const show = ref(false)
</script>

<template>
  <div class="flex items-center gap-x-[10px] p-[10px] bg-color-linear-14 border-radius-0">
    <Image
      src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/referAndEarn/invite_wheel_entry22.png"
      alt="" class="!h-[69px]"
    />
    <div class="flex flex-col flex-1 gap-y-[4.5px] text-[12px] pr-[5px]">
      <h3 class="text-[14px] font-semibold text-white uppercase">
        Invite Roulette
      </h3>
      <p class="text-color">
        Invite friends and get rewards
      </p>
      <div class="flex items-center gap-x-[8px]">
        <div class="flex-1">
          <div class="text-color mb-[4px]">
            <span class="whitespace-pre text-white">0.00</span> / <span class="whitespace-pre">100.00</span>
          </div>
          <div class="h-[5px] rounded-full bg-[--bc-bgColor9] overflow-hidden">
            <p class="h-full rounded-[inherit] bg-active" style="width: 10%;" />
          </div>
        </div>
        <button
          class="h-[30px] min-w-[80px] px-[15px] font-bold text-font border-radius-0 bg-active relative"
          @click="show = true"
        >
          Claim
        </button>
      </div>
    </div>
  </div>
  <BaseModal
    v-model:show="show"
    content-class="mx-auto w-full max-w-[520px] h-[max-content] !min-w-[200px] !bg-transparent z-[555]" no-close
    overlay-class="z-[550]"
  >
    <InviteWapTurntable class="!mx-auto" @close="show = false" />
  </BaseModal>
</template>

<style></style>
