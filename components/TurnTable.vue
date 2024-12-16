<script lang="ts" setup>

</script>

<template>
  <div class="flex">
    <InviteTurntable class="max-w-[500px]" />
    <div class="w-[400px] p-[20px] flex flex-col h-full">
      <section class="flex flex-col gap-y-[4px] mb-[10px]">
        <div class="flex justify-end text-[0px]">
          <button
            class="flex justify-center items-center shrink-0 w-[28px] h-[28px] rounded-[6px] bg-e-g-color-109 text-e-g-color-14"
          >
            <i
              class="inline-block h-[max-content] w-[max-content] icon-n-clean-1 cursor-pointer text-[18px] font-bold"
            />
          </button>
        </div>
        <h3 class="flex items-center gap-x-[10px] text-[20px] font-bold text-e-g-color-14">
          Invite wheel <i
            class="inline-block h-[max-content] w-[max-content] icon-new-wenhao cursor-pointer text-e-g-color-20 text-[17px]"
          />
        </h3>
      </section>
      <div
        class="border-radius-1 pb-[46.67%] bg-no-repeat bg-[length:100%] relative"
        style="background-image: url(&quot;https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/_E/activity/inviteWheel2/bg1.png&quot;);"
      >
        <div class="w-[84%] absolute bottom-[48.85%] left-0 right-0 mx-auto text-center">
          <div class="invite-wheel2-sum text-[36px] font-[800] relative" data-text="R$94.32">
            R$94.32
          </div>
          <div class="rounded-full overflow-hidden h-[6px] mt-[3%]">
            <p class="bg-color-activity-42 h-full rounded-[inherit]" style="width: 94.32%;" />
          </div>
        </div>
        <div class="w-[84%] absolute bottom-[6%] left-0 right-0 mx-auto text-center text-[16px]">
          <button class="w-[180px] h-[36px] font-extrabold text-e-g-color-88 rounded-full bg-color-linear-24">
            Withdraw
          </button>
          <div class="text-center font-medium text-e-g-color-14 mt-[6px]">
            <span class="text-e-g-color-123 font-bold">R$5.68</span> more for withdrawal.
          </div>
        </div>
      </div>
      <p class="mt-[20px] text-e-g-color-14 font-medium text-[14px] text-center">
        Remain time <span class="font-bold text-e-g-color-123">2D: 23H: 52M: 30S</span>
      </p><button
        class="min-h-[56px] w-full bg-e-linear-color-2 border-radius-0 text-[14px] text-e-g-color-15 font-bold mt-[10px] whitespace-break-spaces"
      >
        Invite friends get more cash
      </button>
      <div class="px-[12px] py-[7px] flex items-center bg-e-g-color-126 border-radius-0 mt-[20px]">
        <div class="text-[14px] font-semibold flex-1">
          <div class="text-e-g-color-14">
            When your friends place bets, you get high commissions based on their bet amounts.<span
              class="text-e-g-color-100 cursor-pointer underline"
            >What is Commission?</span>
          </div>
        </div><i
          class="inline-block h-[max-content] w-[max-content] icon sysicon-n-info-circle-2 cursor-pointer text-[20px] text-e-g-color-100"
        />
      </div>
      <div class="flex-[1] flex flex-col gap-y-[8px] mt-[20px] overflow-hidden">
        <div
          class="h-[50px] text-[14px] font-bold text-e-g-color-14 bg-e-g-color-2 border-radius-1 flex justify-between items-center gap-[5px] overflow-hidden p-[5px] shrink-0"
        >
          <div class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer bg-e-g-color-11">
            Winner
          </div>
          <div class="h-full flex-1 flex items-center justify-center border-radius-0 cursor-pointer">
            My Reward
          </div>
        </div>
        <div class="overflow-hidden text-[13px] bg-e-g-color-2 border-radius-1 flex flex-col flex-1 p-[15px]" /><!---->
      </div>
    </div>
  </div>
</template>

<style></style>
