<script setup lang="ts"></script>

<template>
  <div class="px-[40px] flex flex-col flex-1 relative text-[14px] mt-[30px] text-white">
    <div class="mb-[10px]">
      <div
        class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] border-radius-0 overflow-hidden cursor-pointer"
      >
        <p>Phone Number</p>
        <div
          class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
        >
          <span class="truncate mr-[8px]">857676</span><i
            class="inline-block h-[max-content] w-[max-content] icon-alert-warning cursor-pointer text-[--bc-bgColor10] text-[15px] mr-[8px]"
            tabindex="-1"
          /><span class="text-[--bc-activeColor]">Verify</span>
        </div>
      </div>
    </div>
    <div
      class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
    >
      <p>Email</p>
      <div
        class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
      >
        <span class="text-[--bc-activeColor]">Add</span>
      </div>
    </div>
    <div
      class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
    >
      <p>Account</p>
      <div><span class="text-[--bc-activeColor]">Add</span></div>
    </div>
    <div
      class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
    >
      <p>Password</p>
      <div
        class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
      >
        <span class="text-[--bc-activeColor]">Change</span>
      </div>
    </div>
    <div
      class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
    >
      <p>CPF</p>
      <div><span class="text-[--bc-activeColor]">Add</span></div>
    </div>
  </div>
</template>
