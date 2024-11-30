<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const src = defineProp<string>('')
const alt = defineProp<string>('')
</script>

<template>
  <Avatar class="bg-button">
    <AvatarImage :src="src" :alt="alt" />
    <AvatarFallback>{{ alt }}</AvatarFallback>
  </Avatar>
</template>
