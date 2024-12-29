<script lang="ts" setup>
import { useToast } from '@/components/ui/toast'
import { addFavorite, getFavorite, removeFavorite } from '~/api/game'

const { toast } = useToast()
const params = useRoute().params as { id: string }
const id = params.id
const isFavorite = ref(false)

async function handleFavorite() {
  isFavorite.value = await getFavorite(id)
  if (isFavorite.value) {
    await removeFavorite(id)
  }
  else {
    await addFavorite(id)
  }

  isFavorite.value = !isFavorite.value
  toast({
    title: isFavorite.value ? 'Bookmarked' : 'UnBookmarked!',
    class: 'my-toast bg-green',
    duration: 2000,
  })
}
onMounted(async () => {
  isFavorite.value = await getFavorite(id)
})
</script>

<template>
  <div class="container @container flex flex-col gap-y-[12px] mt-[12px] relative z-[20] sm:px-[24px]">
    <BaseBread type="Slots" title="Game" />
    <section class="bg-color2 mb-[48px] border-radius-1 overflow-hidden">
      <div class=" relative block w-full h-[720px]">
        <div class=" w-full h-full flex flex-col items-center absolute top-0 left-0 bg-no-repeat bg-cover">
          <iframe
            class="w-full flex-1 bg-black"
            src="https://skylinescore3s.evo-games.com/entry?params=Y2FzaW5vX2lkPXNreWxpbmVzY29yZTNzMDEKZ2FtZT1yb3VsZXR0ZQpzaWduYXR1cmU9eFdQb0d6TEI3UmpjWjdOc2FwNTktTzNJSU1mYWlIQzlmLU45U29wTHJXcnhEUXB5Rzk5NGJkbGlxMXppcGNEaDdfSzJKcjlfYTdmeXNZcDZfYXM4MEEKdWFfbGF1bmNoX2lkPTE4MGRkOTVmYmI3YzhjMGEyYTA2NzFmZgp0YWJsZV9pZD03bnlpYXdzOXRncXJ6YXozCmp3c2g9ZXlKcmFXUWlPaUl4TmpneU5ERXlNVFEzT1RjMElpd2lZV3huSWpvaVJWTXlOVFlpZlEKcGxheV9tb2RlPXJlYWxfbW9uZXkK&amp;JSESSIONID=sn56xr7jyqfafibesohzbesjtzc4la5x1362ab5a"
            frameborder="0"
          />
        </div>
      </div>
      <div class="flex justify-between items-center px-[20px] py-[13px] text-[--bc-color20]">
        <div class="flex items-center gap-[30px]">
          <div class="flex">
            <i
              class="inline-block h-[max-content] w-[max-content] cursor-pointer text-[18px]"
              :class="isFavorite ? 'icon-new-love text-[--bc-textColor3]' : 'icon-new-favorites-soild text-white'"
              @click="handleFavorite"
            />
          </div>
          <div class="flex">
            <i
              class="inline-block h-[max-content] w-[max-content] icon-new-share cursor-pointer text-[18px] hover:text-white"
            />
          </div>
        </div>
        <div class="flex">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-full-screen cursor-pointer text-[20px] hover:text-white"
          />
        </div>
      </div>
    </section>
    <BaseGameList :id="id" title="HOT" :have-more="false" />
  </div>
</template>

<style></style>
