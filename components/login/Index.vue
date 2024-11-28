<script setup lang="ts">
import * as z from 'zod'
import Checkbox from '../ui/checkbox/Checkbox.vue'

const showPassword = ref(false)
const schema = {
  username: z.string().min(2).max(50),
  password: z.string().optional(),
}

function onSubmit(e: any) {
  console.log('🚀 ~ onSubmit ~ e:', e)
}
</script>

<template>
  <div class="flex justify-between overflow-hidden w-full h-full md:w-[800px] md:h-[700px] bg-color2 rounded">
    <div class="hidden md:flex flex-col justify-between relative w-[400px]">
      <div class="text-[0px] w-[400px] h-[700px] relative">
        <Image
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/login/banner_pc.jpg" alt=""
          importance="auto" class="w-[400px] h-[700px]" lazy=""
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
                alt="" importance="auto" class="cursor-pointer h-[40px] w-full" lazy
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-[400px] px-[40px] pt-[40px] flex flex-col relative">
      <div class="text-[20px] font-bold text-white mb-[20px]">
        Sign In
      </div>
      <div class="flex flex-col gap-[10px] flex-1 overflow-y-auto pb-[40px]">
        <BaseForm :schema="schema" class="flex flex-col gap-[10px]" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormControl>
                <BaseInput placeholder="Account / Email / Phone Number" v-bind="componentField" />
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
                        class="inline-block h-[max-content] w-[max-content] cursor-pointer"
                        :class="!showPassword ? 'icon-new-eyes-close' : 'icon-new-eyes-open'"
                      />
                    </template>
                  </BaseInput>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="text-[14px] text-white text-right">
            <div class="cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <div class="flex items-center gap-[8px] cursor-pointer text-[16px] text-white mt-[10px]">
            <Checkbox class="border-[--bc-activeColor] data-[state=checked]:bg-[--bc-activeColor]" />

            <div class="flex-1 overflow-hidden">
              <div class="text-white cursor-pointer">
                Remember me
              </div>
            </div>
          </div>
          <button
            class="flex items-center min-h-[46px] justify-center w-full bg-color-main-1 rounded text-[14px] font-bold text-black bg-[--bc-activeColor]"
            type="submit"
          >
            Sign
            In
          </button>
        </BaseForm>

        <div class="text-[14px] text-[--bc-textColor]">
          <div>
            Don't have an account? <div class="text-[--bc-activeColor] font-[900] cursor-pointer">
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
                      alt="google" importance="auto" class="shrink-0 mr-[10px] h-[30px]" lazy=""
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
