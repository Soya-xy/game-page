<script setup lang="ts">
const { setLocale, locale, setLocaleCookie } = useI18n()
function toggleLang() {
  setLocale(locale.value === 'zh-CN' ? 'en' : 'zh-CN')
  setLocaleCookie(locale.value === 'zh-CN' ? 'en' : 'zh-CN')
}
</script>

<template>
  <div>
    <Suspense>
      <ClientOnly>
        <div text-gray:80>
          You're offline {{ $t('lang.name') }}
          <Button @click="toggleLang">
            切换语言
          </Button>
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>
</template>
