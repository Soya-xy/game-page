<script lang="ts" setup>

</script>

<template>
  <div class="px-[40px] pt-[20px] text-[16px] flex-1 overflow-auto">
    <div
      class="h-[86px] shrink-0 flex flex-col justify-between border border-[--bc-bgColor5] border-dashed px-[20px] py-[8px] rounded-[8px]"
    >
      <div class="text-color flex items-center justify-between">
        <span>Cash</span>
      </div>
      <div class="flex mb-[3px] font-bold text-[18px] text-white items-center justify-center whitespace-pre">
        <span class="text-color-tip-1">R$&nbsp;</span><span class="whitespace-pre">0.01</span>
      </div>
      <button
        class="h-[25px] w-full rounded-[13px] text-center flex items-center justify-center bg-[--bc-color-3] cursor-pointer underline text-white"
      >
        Deposit
        Now
      </button>
    </div>
    <div
      class="h-[86px] shrink-0 flex flex-col justify-between border border-[--bc-bgColor5] border-dashed px-[20px] py-[8px] rounded-[8px] mt-[15px]"
    >
      <div class="text-color flex items-center justify-between">
        <span>Rewards</span>
      </div>
      <div class="flex mb-[3px] font-bold text-[18px] text-white items-center justify-center whitespace-pre">
        <span class="text-color-tip-1">R$&nbsp;</span><span class="whitespace-pre">0.01</span>
      </div><button
        class="h-[25px] w-full rounded-[13px] text-center flex items-center justify-center bg-[--bc-color-3] underline text-white"
      >
        Get
        Rewards
      </button>
    </div>
    <div
      class="flex mt-[10px] h-[80px] w-full pb-[10px] justify-between flex-col items-center shrink-0 bg-cover bg-no-repeat bg-center border-radius-0 overflow-hidden relative"
      style="background-image: url(https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/home/wallet_card_08.jpg?20240118);"
    >
      <div class="absolute right-0 h-full flex items-start justify-center w-[54%] flex-col">
        <p class="text-[22px] text-white text-left font-extrabold leading-[33px] relative w-full">
          <span>Rewards
            Games</span>
        </p>
        <div class="text-white flex items-center justify-center font-medium cursor-pointer">
          <span class="join-text">Play Now</span>
          <i class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer text-[16px]" />
        </div>
      </div>
    </div>
    <h3 class="text-white font-bold text-[18px] mt-[20px] mb-[12px]">
      Rules
    </h3>
    <div class="text-[16px] text-color">
      <div>1. What is Rewards wallet？</div>
      <div class="text-[--bc-color20] mt-[3px]">
        All rewards will be stored in your rewards wallet.
      </div>
      <div class="mt-[12px]">
        2.How to use the rewards?
      </div>
      <div class="text-[--bc-color20] mt-[3px]">
        Use your rewards in rewards area games!
      </div>
      <div class="mt-[12px]">
        3. How to calculate profit?
      </div>
      <div class="text-[--bc-color20] mt-[3px]">
        Cash wallet bets win cash. Rewards wallet bets win rewards. Mixed bets
        distribute winnings proportionally.
        The system will prioritize using the main wallet balance for wagering. When the main wallet balance is
        insufficient, the rewards wallet will be used for wagering.
      </div>
      <div class="mt-[12px]">
        4. What is the calculation term for 'wagering requirements'?
      </div>
      <div class="text-[--bc-color20] mt-[3px] whitespace-pre-line">
        ● For the 'Slot' game: Calculation is based on the
        value of the bet, regardless of the outcome.
        ● For the 'Game Show, Virtual Sports, Casual, Original' game: Calculation is based on the absolute value of wins
        and losses (outcome).
        ● For 'Sportsbooks, E-sports' game: No calculation.
      </div>
      <div class="mt-[12px]">
        5.What is the rewards redemption limit?
      </div>
      <div class="text-[--bc-color20] mt-[3px] whitespace-pre-line">
        After the rewards has completed the valid betting
        limit, the rewards can be exchanged for 1x the rewards received. (For example: if you get a R$100 rewards
        through the first deposit activity, after completing the valid betting limit, you can only exchange a maximum of
        R$100 rewards to your cash wallet. The rest of the rewards will be deducted directly.)
      </div>
    </div>
  </div>
</template>

<style></style>
