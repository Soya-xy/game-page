<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

import * as z from 'zod'

const submit = defineEmit<[value: Record<string, unknown>]>()
const schema = defineProp<z.ZodRawShape>(undefined, true)

const formSchema = toTypedSchema(z.object(schema.value))
const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  submit(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <slot />

    <slot name="submit" />
  </form>
</template>
