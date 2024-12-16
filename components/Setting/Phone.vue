<script lang="ts" setup>
import { sendCodeToMobile, verifyPhone } from '~/api/user/edit'
import { useToast } from '../ui/toast'

const { userInfo } = useUserStore()
const { toast } = useToast()
const codeText = ref('Code')
const error = ref('')
const code = ref('')
const loading = ref(false)

const close = defineEmit()

let i: any
let count = 300
async function sendCode() {
  try {
    i = setInterval(() => {
      if (count === 0) {
        clearInterval(i)
        codeText.value = 'Code'
        return
      }
      codeText.value = `Code ${count--}s`
    }, 1000)

    await sendCodeToMobile(userInfo!.mobile, 1)
    toast({
      title: `Code was sent to ${userInfo!.mobile}`,
    })
  }
  catch (error) {
    console.error(error)
  }
}

async function save() {
  if (!code.value) {
    error.value = 'Please enter the code'
    return
  }
  try {
    loading.value = true
    await verifyPhone({
      code: code.value,
      mobile: userInfo!.mobile,
    })
    toast({
      title: 'Phone number verified successfully',
    })
    close()
  }
  catch (error) {
    console.error(error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col h-full" type="tel">
    <section class="flex-1">
      <h2 class="mb-[10px] text-color-text-1 text-[14px] pb-[10px] whitespace-break-spaces">
        Code was sent to<span class="text-white ml-1">{{ userInfo?.mobile }}</span>
      </h2>
      <div class="!mb-[10px]">
        <BaseInput v-model="code" type="number" placeholder="Enter code" :error="!!error">
          <template #suffix>
            <button class="text-white font-bold absolute right-[10px]" @click="sendCode">
              {{ codeText }}
            </button>
          </template>
        </BaseInput>
        <div v-if="error" class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
          {{ error }}
        </div>
      </div>
    </section>
    <BaseButton
      class="bg-active w-full text-font font-bold text-[14px] h-[46px] border-radius-0" :loading="loading"
      @click="save"
    >
      Save
    </BaseButton>
  </div>
</template>

<style></style>
