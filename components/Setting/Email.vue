<script lang="ts" setup>
import { updateEmail } from '~/api/user/edit'
import { useToast } from '../ui/toast'

const email = ref('')
const error = ref('')
const loading = ref(false)
const { toast } = useToast()

const close = defineEmit()

async function save() {
  if (!email.value) {
    error.value = 'Please enter your email'
    return
  }
  if (!isEmail(email.value)) {
    error.value = 'Please enter a valid email'
    return
  }

  try {
    loading.value = true
    error.value = ''
    await updateEmail(email.value)
    toast({
      title: 'successfully',
      duration: 2000,
      class: 'my-toast',
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
        Email for account security. Only you can see it.
      </h2>
      <div class="!mb-[10px]">
        <BaseInput v-model="email" type="email" placeholder="Email" :error="!!error" />
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
