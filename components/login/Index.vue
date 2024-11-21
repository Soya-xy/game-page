<script setup lang="ts">

</script>

<template>
  <div class="flex justify-between overflow-hidden w-[800px] h-[700px] bg-color-4 rounded">
    <div class="flex flex-col justify-between relative w-[400px]">
      <div class="text-[0px] w-[400px] h-[700px] relative">
        <img
          src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/C0E/login/banner_pc.jpg" alt=""
          importance="auto" class="w-[400px] h-[700px]" lazy=""
        >
        <div class="text-center w-full px-[20px] absolute top-[432px]">
          <div class="font-[200] text-color-text-0 mb-[2px] text-[18px]">
            Welcome to <b class="text-color-main-1 font-[900] uppercase text-[24px]">afun.com</b>
          </div>
          <div class="text-[14px] mb-[12px] text-color-text-2">
            Bring you an unprecedented gaming experience.
          </div>
          <div class="flex items-center justify-center">
            <div class="flex-1 flex justify-end items-center h-[55px] cursor-pointer">
              <div class="h-full w-[55px]">
                <iframe
                  id="koyoz" class="w-[100%] h-[100%]" src="https://www.afun.com/res/sel-new.html" frameborder="0"
                  scrolling="no"
                />
              </div>
            </div><span class="w-[1px] bg-color-text-0 opacity-20 mx-[20px] shrink-0 h-[30px]" />
            <div class="flex-1">
              <img
                src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/30101/logo/logo-h.png?20241111"
                alt="" importance="auto" class="cursor-pointer h-[40px]" lazy=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[400px] px-[40px] pt-[40px] flex flex-col relative">
      <i
        class="inline-block h-[max-content] w-[max-content] icon-new-clean-3 cursor-pointer hover:-rotate-[180deg] text-color-text-2 hover-text-color-text-0 transition-all duration-300 text-[16px] absolute right-[20px] top-[20px]"
      />
      <div class="text-[20px] font-bold text-color-text-0 mb-[20px]">
        Sign In
      </div>
      <div class="flex flex-col gap-[10px] flex-1 overflow-y-auto pb-[40px]">
        <div>
          <div
            class="field-container w-full border-radius-0 flex items-center shrink-0 border-color-btn-3 border border-solid relative h-[46px]  text-[14px] px-[16px] gap-[8px] field-container-pc h-[46px] text-[14px] bg-color-search-1"
          >
            <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
              <input
                class="h-full flex-1 min-w-[60px] field-base text-color-text-0 placeholder:font-normal" type="text"
                index="0" autocapitalize="off" autocorrect="off" autocomplete="new-text" inputmode="text"
                placeholder="Account / Email / Phone Number"
              >
            </div><button class="fixed -top-[10000px] -lef-[10000px]" />
          </div>
        </div>
        <div>
          <div
            class="field-container w-full border-radius-0 flex items-center shrink-0 border-color-btn-3 border border-solid relative h-[46px]  text-[14px] px-[16px] gap-[8px] field-container-pc h-[46px] text-[14px] bg-color-search-1"
          >
            <div class="h-full flex items-center flex-1 shrink-0 relative overflow-hidden">
              <input
                class="h-full flex-1 min-w-[60px] field-base text-color-text-0 placeholder:font-normal"
                type="password" index="1" autocapitalize="off" autocorrect="off" autocomplete="new-text"
                inputmode="text" placeholder="Password"
              >
            </div><button
              tabindex="-1"
              class="text-color-text-2 text-[12px] flex items-center justify-center [text-16px] text-[16px]"
            >
              <i class="inline-block h-[max-content] w-[max-content] icon-new-eyes-close cursor-pointer" />
            </button>
          </div>
        </div>
        <div class="text-[14px] text-color-text-0 text-right">
          <div class="cursor-pointer">
            Forgot Password?
          </div>
        </div>
        <div class="flex gap-[8px] cursor-pointer text-[16px] text-color-text-1 mt-[10px]">
          <i
            class="inline-block h-[max-content] w-[max-content] icon-new-checked cursor-pointer shrink-0 ml-[0.2px] text-[16px] text-color-main-1"
          />
          <div class="flex-1 overflow-hidden">
            <div class="text-color-text-0 hover-text-color-text-0 cursor-pointer">
              Remember me
            </div>
          </div>
        </div><button
          class="flex items-center min-h-[46px] justify-center w-full bg-color-main-1 border-radius-0 text-[14px] font-bold text-color-btn-4"
        >
          Sign
          In
        </button>
        <div class="text-[14px] text-color-text-2">
          <div>
            Don't have an account? <div class="text-color-main-1 font-[900] cursor-pointer">
              Sign Up
            </div>
          </div>
        </div>
        <div class="flex-1" />
        <div class="flex flex-col text-center items-center text-[14px] text-color-text-1">
          <div class="flex w-full items-center mb-[10px]">
            <div class="flex-1 h-[1.1px] bg-color-btn-3" />
            <div class="mx-[13px]">
              OR
            </div>
            <div class="flex-[1] h-[1.1px] bg-color-btn-3" />
          </div>
          <div class="w-full">
            <div id="login-googlelogin-container" class="w-[max-content] min-w-[200px] mx-auto">
              <div id="login-register-google-login" class="relative flex justify-center items-center flex-1">
                <div class="w-full flex items-center justify-center">
                  <button
                    class="border-radius-0 text-color-text-0 font-bold flex items-center w-full justify-center shrink-0 bg-color-btn-2 h-[46px] px-[15px] text-[14px]"
                  >
                    <img
                      src="https://web-res-ccc.afunimg8.com/cdn-cgi/image/format=auto/C02/login/google1.png?t20231209"
                      alt="google" importance="auto" class="shrink-0 mr-[10px] h-[30px]" lazy=""
                    > Sign in with
                    Google+
                  </button>
                </div><iframe
                  src="https://afun.com/res/googleLogin.html?client_id=743246745371-1qkfvdlr9septdq6h7cf6v9voktt6ni3.apps.googleusercontent.com"
                  scrolling="no" frameborder="0" allowtransparency="true" class="absolute z-[1] w-full h-[40px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
