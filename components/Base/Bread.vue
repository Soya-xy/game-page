<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const type = defineProp('', true)
const title = defineProp('', true)
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList class="bg-color2 py-[9.5px] px-[15px] inline-flex border-radius-0 mb-[16px] text-[14px]">
      <BreadcrumbItem>
        <BreadcrumbLink>
          <NuxtLink to="/">
            {{ type }}
          </NuxtLink>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <p class="text-white">
          {{ title }}
        </p>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>
