<script lang="ts" setup>
const show = ref(false)
const showDrawer = ref(false)
const showModal = ref(false)
const { isPc } = useDevice()
const list = ref([
  {
    title: 'Invite Roulette',
    desc: 'Invite users and get a <span class="text-white font-bold">R$100.00</span> cash reward.',
    url: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/referAndEarn/22.png',
    onClick: () => {
      show.value = true
    },
  },
  {
    title: 'Commission',
    desc: 'Earn up to <span class="text-white font-bold">70%</span> commission when your friend bet.',
    url: 'https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/referAndEarn/commission.png?20241031',
    onClick: () => {
      if (isPc.value)
        showModal.value = true
      else
        showDrawer.value = true
    },
  },
])
</script>

<template>
  <div>
    <div class="mb-[20px] text-[20px] text-white font-bold">
      Rewards
    </div>
    <div class="grid gap-[22px] md:grid-cols-[repeat(auto-fill,minmax(440px,1.5fr))]">
      <div v-for="item in list" :key="item.title" class="md:px-[40px] pl-[15px] border-radius-1 md:h-[247px] min-h-[138px] flex overflow-hidden bg-color2">
        <div class="flex justify-around flex-col flex-1 h-full md:pb-[40px] md:pt-[33px] pt-[5px] pb-[7px]">
          <div class="text-white font-black md:text-[20px] text-[15px] uppercase min-h-[30px]">
            {{ item.title }}
          </div>
          <div class="text-color md:text-[16px] text-[12px]">
            <span v-html="item.desc" />
          </div>
          <button
            class="px-[15px] md:h-[46px] h-[40px] shrink-0 font-bold md:min-w-[240px] min-w-[120px] w-[max-content] border-radius-0 bg-active text-font md:text-[14px] text-[12px]"
            @click="item.onClick"
          >
            Details
          </button>
        </div>
        <div class="md:h-[230px] md:w-[230px] h-[120px] w-[120px] bg-no-repeat bg-cover bg-center relative md:translate-x-[10px] affiliate-item">
          <div
            class="md:h-[230px] md:w-[230px] h-[120px] w-[120px] bg-no-repeat bg-cover bg-center z-[2] absolute top-0 left-0"
            :style="{ backgroundImage: `url(${item.url})` }"
          />
        </div>
      </div>
    </div>
  </div>
  <BaseModal v-model:show="show" content-class="mx-auto w-full max-w-[520px] h-[max-content] !min-w-[200px] !bg-transparent z-[555]" no-close overlay-class="z-[550]">
    <InviteWapTurntable class="!mx-auto" @close="show = false" />
  </BaseModal>
  <BaseDrawer v-model:open="showDrawer" direction="right" content-class="z-[999] h-[100vh]" overlay-class="z-[999]">
    <template #title>
      Commission
    </template>
    <AffiliateRules />
    <AffiliateLevel />
  </BaseDrawer>
</template>

<style></style>
