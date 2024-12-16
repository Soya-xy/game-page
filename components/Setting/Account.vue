<script lang="ts" setup>
import { isEmpty } from 'ramda'
import { updateAccount } from '~/api/user/edit'
import { useToast } from '../ui/toast'

const error = ref('')
const account = ref('')
const loading = ref(false)
const { toast } = useToast()

const close = defineEmit()

async function save() {
  if (isEmpty(account.value)) {
    error.value = 'Account cannot be empty'
    return
  }
  else {
    error.value = ''
  }

  try {
    loading.value = true
    await updateAccount(account.value)
    toast({
      title: 'Account updated successfully',
      duration: 2000,
      class: 'my-toast',
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
        Account: letters and numbers only. Use for login after setup.
      </h2>
      <div class="!mb-[10px]">
        <BaseInput v-model="account" placeholder="Account" :error="!!error" />
      </div>
      <div v-if="error" class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
        {{ error }}
      </div>
    </section>
    <BaseButton class="bg-active w-full text-font font-bold text-[14px] h-[46px] border-radius-0" :loading="loading" @click="save">
      Save
    </BaseButton>
  </div>
</template>

<style></style>
