<script setup lang="ts">
import { cn } from '@/lib/utils'
import * as z from 'zod'
import Checkbox from '../ui/checkbox/Checkbox.vue'
import { useToast } from '../ui/toast'

const showPassword = ref(false)
const showInviteCode = ref(false)
const { toast } = useToast()
const router = useRouter()
const userStore = useUserStore()
const schema = {
  mobile: z.string(),
  password: z.string(),
  inviteCode: z.string().optional(),
}
const isAgree = ref<boolean>(false)
async function onSubmit(e: any) {
  if (!isAgree.value) {
    return toast({
      title: 'Please agree to the terms of service and privacy policy',
    })
  }

  await userStore.register(e)
}
</script>

<template>
  <div class="flex justify-between overflow-hidden w-[800px] h-[700px] bg-color2 rounded">
    <div class="flex flex-col justify-between relative w-[400px]">
      <div class="text-[0px] w-[400px] h-[700px] relative">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/login/banner_pc.jpg"
          importance="auto" class="w-[400px] h-[700px]"
        />
        <div class="text-center w-full px-[20px] absolute top-[432px]">
          <div class="font-[200] text-white mb-[2px] text-[18px]">
            Welcome to <b class="text-[--bc-activeColor] font-[900] uppercase text-[24px]">afun.com</b>
          </div>
          <div class="text-[14px] mb-[12px] text-[--bc-textColor]">
            Bring you an unprecedented gaming experience.
          </div>
          <div class="flex items-center justify-around px-[20px]">
            <div class="flex flex-1 justify-end items-center h-[55px] cursor-pointer">
              <div class="h-full w-[55px]">
                <iframe
                  id="koyoz" class="w-[100%] h-[100%]" src="https://www.afun.com/res/sel-new.html" frameborder="0"
                  scrolling="no"
                />
              </div>
            </div>
            <span class="w-[1px] bg-[--bc-textColor] opacity-20 mx-[20px] shrink-0 h-[30px]" />
            <div class="flex-1">
              <Image
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/30101/logo/logo-h.png?20241111"
                importance="auto" class="cursor-pointer h-[40px] w-full" lazy
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[400px] px-[40px] pt-[40px] flex flex-col relative">
      <div class="text-[20px] font-bold text-white mb-[20px]">
        Sign Up
      </div>
      <div class="flex flex-col gap-[10px] flex-1 overflow-y-auto pb-[40px]">
        <BaseForm :schema="schema" class="flex flex-col gap-[10px]" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="mobile">
            <FormItem>
              <FormControl>
                <BaseInput placeholder="Phone Number" v-bind="componentField">
                  <template #prefix>
                    <div
                      class="flex items-center pl-[10px] pr-[5px] flex-1 border-r border-solid border-[--bc-buttonColor]"
                    >
                      <div class="text-[14px] flex items-center text-white w-[50px]">
                        <img
                          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/home/country/area/Area_Code_55.svg?t202411122151"
                          importance="auto" class="mr-[4px] w-[20px]"
                        >
                        <p>+55</p>
                      </div>
                    </div>
                  </template>
                </BaseInput>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormControl>
                <div>
                  <BaseInput
                    :type="showPassword ? 'text' : 'password'" placeholder="Password" v-bind="componentField"
                    @click-icon="showPassword = !showPassword"
                  >
                    <template #icon>
                      <i
                        class="inline-block h-[18px] w-[18px] cursor-pointer"
                        :class="!showPassword ? 'icon-new-eyes-close' : 'icon-new-eyes-open'"
                      />
                    </template>
                  </BaseInput>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="text-[14px] text-color text-left">
            <div class="cursor-pointer w-[max-content]" @click="showInviteCode = !showInviteCode">
              Add Invite Code <i
                :class="cn(`inline-block transition-all duration-200  h-[max-content] w-[max-content] rotate-[90deg] icon-new-arrow cursor-pointer font-bold`, showInviteCode ? '-rotate-[90deg] text-white ' : '')"
              />
            </div>
          </div>
          <FormField v-if="showInviteCode" v-slot="{ componentField }" name="inviteCode">
            <FormItem>
              <FormControl>
                <BaseInput placeholder="Account / Email / Phone Number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="flex items-start gap-[8px] cursor-pointer text-[16px] text-white my-[10px]">
            <Checkbox v-model:checked="isAgree" class="border-[--bc-activeColor] data-[state=checked]:bg-[--bc-activeColor]" />

            <div class="flex-1 overflow-hidden">
              <div class="text-color cursor-pointer text-[14px]">
                I confirm that I am above 18 years old and accept the
                <span class="text-white">Privacy Policy</span> and
                <span class="text-white">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
          <button
            class="flex items-center min-h-[46px] justify-center w-full bg-color-main-1 rounded text-[14px] font-bold text-black bg-[--bc-activeColor]"
            type="submit"
          >
            Sign
            Up
          </button>
        </BaseForm>

        <div class="text-[14px] text-[--bc-textColor]">
          <div>
            Already have an account?
            <div class="text-[--bc-activeColor] font-[900] cursor-pointer" @click="router.push('/login')">
              Sign In
            </div>
          </div>
        </div>
        <div class="flex-1" />
        <div class="flex flex-col text-center items-center text-[14px] text-color-text-1">
          <div class="flex w-full items-center mb-[10px]">
            <div class="flex-1 h-[1.1px] bg-[--bc-buttonColor]" />
            <div class="mx-[13px]">
              OR
            </div>
            <div class="flex-[1] h-[1.1px] bg-[--bc-buttonColor]" />
          </div>
          <div class="w-full">
            <div id="login-googlelogin-container" class="w-[max-content] min-w-[200px] mx-auto">
              <div id="login-register-google-login" class="relative flex justify-center items-center flex-1">
                <div class="w-full flex items-center justify-center">
                  <button
                    class="rounded text-white font-bold flex items-center w-full justify-center shrink-0 bg-color6 h-[46px] px-[15px] text-[14px]"
                  >
                    <Image
                      src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/login/google1.png?t20231209"
                      alt="google" importance="auto" class="shrink-0 mr-[10px] h-[30px]"
                    /> Sign in with
                    Google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
