<script lang="ts" setup>
import { isEmpty } from 'ramda'
import { updatePassword } from '~/api/user/edit'
import { useToast } from '../ui/toast'

const { toast } = useToast()

const error = ref('')
const newError = ref('')
const confirmError = ref('')
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const loading = ref(false)

const close = defineEmit()

async function save() {
  if (isEmpty(oldPassword.value)) {
    error.value = 'Old password cannot be empty'
    return
  }
  else if (isEmpty(newPassword.value)) {
    newError.value = 'New password cannot be empty'
    return
  }
  else if (isEmpty(confirmPassword.value)) {
    confirmError.value = 'Confirm password cannot be empty'
    return
  }

  if (newPassword.value === confirmPassword.value) {
    confirmError.value = 'New password and confirm password cannot be the same'
    return
  }

  if (newPassword.value === oldPassword.value) {
    newError.value = 'New password cannot be the same as old password'
    return
  }

  try {
    loading.value = true
    await updatePassword({
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value,
      password: oldPassword.value,
    })
    toast({
      title: 'Password updated successfully',
      duration: 2000,
    })
    close()
  }
  catch (e) {
    console.error(e)
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
        Old password cannot be your new password.
      </h2>
      <div class="!mb-[10px]">
        <BaseInput v-model="oldPassword" type="password" placeholder="Old password" />
      </div>
      <div v-if="error" class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
        {{ error }}
      </div>
      <div class="!mb-[10px]">
        <BaseInput v-model="newPassword" type="password" placeholder="New password" />
      </div>
      <div v-if="newError" class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
        {{ newError }}
      </div>
      <div class="!mb-[10px]">
        <BaseInput v-model="confirmPassword" type="password" placeholder="Confirm password" />
      </div>
      <div v-if="confirmError" class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
        {{ confirmError }}
      </div>
    </section>
    <BaseButton class="bg-active w-full text-font font-bold text-[14px] h-[46px] border-radius-0" :loading="loading" @click="save">
      Save
    </BaseButton>
  </div>
</template>

<style></style>
