<script setup lang="ts">
const { userInfo } = useUserStore()

const name = ref('Setting')
const type = ref(0)
const showCPF = ref<boolean>(false)

function closeHandle() {
  type.value = 0
  name.value = 'Setting'
  showCPF.value = false
}
</script>

<template>
  <div
    class="sticky top-0 z-[0] w-full flex items-center px-[30px] bg-linear-12 md:rounded-t-[10px] text-white md:h-[76px] shrink-0 h-[46px]"
  >
    <div class="flex-1 flex items-center">
      <i
        v-if="name !== 'Setting'"
        class="inline-block h-[max-content] w-[max-content] icon-new-arrow cursor-pointer mr-[10px] md:text-[20px] text-[16px] -rotate-[180deg]"
        @click="() => {
          name = 'Setting'
          type = 0
        }"
      />
      <div class="md:text-[20px] text-[16px] font-bold">
        {{ name }}
      </div>
    </div>
  </div>
  <div class="md:px-[40px] px-[20px] pb-[20px] flex flex-col flex-1 relative text-[14px] mt-[30px] text-white">
    <template v-if="type === 0">
      <div class="mb-[10px]">
        <div
          class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] border-radius-0 overflow-hidden cursor-pointer"
        >
          <p>Phone Number</p>
          <div
            class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
            @click="() => {
              name = 'Phone Number'
              type = 1
            }"
          >
            <span class="truncate mr-[8px]">{{ userInfo?.mobile }}</span><i
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
          @click="() => {
            name = 'Email'
            type = 2
          }"
        >
          <span class="text-[--bc-activeColor]">Add</span>
        </div>
      </div>
      <div
        class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
      >
        <p>Account</p>
        <div
          class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
          @click="() => {
            name = 'Account'
            type = 3
          }"
        >
          <span class="text-[--bc-activeColor]">Add</span>
        </div>
      </div>
      <div
        class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
      >
        <p>Password</p>
        <div
          class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
          @click="() => {
            name = 'Password'
            type = 4
          }"
        >
          <span class="text-[--bc-activeColor]">Change</span>
        </div>
      </div>
      <div
        class="h-[46px] bg-[--bc-color-3] flex justify-between items-center px-[16px] mb-[10px] border-radius-0 overflow-hidden cursor-pointer"
      >
        <p>CPF</p>
        <div
          class="text-[--bc-color20] font-medium flex items-center shrink-0 max-w-[60%] overflow-hidden flex-1 justify-end"
          @click="showCPF = true"
        >
          <span class="text-[--bc-activeColor]">Add</span>
        </div>
      </div>
    </template>
    <SettingPhone v-if="type === 1" @close="closeHandle" />
    <SettingEmail v-if="type === 2" @close="closeHandle" />
    <SettingAccount v-if="type === 3" @close="closeHandle" />
    <SettingPassword v-if="type === 4" @close="closeHandle" />
  </div>
  <BaseModal v-model:show="showCPF" content-class="h-[700px] overflow-y-scroll" wap-content-class="!p-0 min-h-[600px]">
    <template #title>
      <div class="w-full flex items-center px-[30px] md:bg-linear-12 rounded-t-[10px] text-white md:h-[76px] h-[46px] shrink-0">
        CPF
      </div>
    </template>
    <div class="px-[20px] pb-[20px] flex flex-col flex-1 relative text-[14px] text-white mt-[20px] md:mt-0">
      <SettingCPF @close="closeHandle" />
    </div>
  </BaseModal>
</template>
