<script lang="ts" setup>
import { isEmpty } from 'ramda'
import { updateCpf } from '~/api/user/edit'

const date = ref('')
const cpf = ref('')
const borderColor = ref('var(--bc-bgColor5)')
const loading = ref(false)
const error = ref('')
const cpfError = ref('')

const close = defineEmit()

async function save() {
  if (!date.value) {
    borderColor.value = 'var(--bc-errorColor)'
    return error.value = 'Please select birthday'
  }
  else {
    error.value = ''
    borderColor.value = 'var(--bc-bgColor5)'
  }

  if (isEmpty(cpf.value)) {
    return cpfError.value = 'Please enter your CPF'
  }
  else {
    cpfError.value = ''
  }

  try {
    loading.value = true
    await updateCpf({
      birthday: date.value,
      cpf: cpf.value,
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
    <section class="flex-1 flex flex-col gap-y-[10px]">
      <h2 class="text-color">
        Birthday
      </h2>
      <div class="flex justify-between gap-x-[10px] h-[40px] relative flex-col">
        <BaseDatePicker v-model="date" placeholder="Birthday" content-class="custom-birthday" />
        <i class="inline-block h-[max-content] w-[max-content] icon-dl-date cursor-pointer text-color absolute right-[16px] top-[50%] translate-y-[-50%]" />
        <div class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
          {{ error }}
        </div>
      </div>

      <h2 class="text-color mt-[10px]">
        CPF
      </h2>
      <div class="!mb-[10px]">
        <BaseInput v-model="cpf" placeholder="CPF" :error="!!cpfError" />
      </div>
      <div class="text-[--bc-errorColor] text-left text-[12px] mt-[2px]">
        {{ cpfError }}
      </div>
    </section>
    <BaseButton class="bg-active w-full text-font font-bold text-[14px] h-[46px] border-radius-0" :loading="loading" @click="save">
      Save
    </BaseButton>
  </div>
</template>

<style>
.custom-birthday,
.custom-birthday input {
  border-radius: 10px;
}

.custom-birthday input {
  background-color: var(--bc-bgColor) !important;
  border: 1px solid v-bind(borderColor) !important;
}
</style>
