import type { $Fetch } from 'ofetch'

declare module '#app' {
  interface NuxtApp {
    $serverApi: $Fetch
    $clientApi: $Fetch
  }
}
