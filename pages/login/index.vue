<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const { close } = useModalRouter()
</script>

<template>
  <Dialog default-open>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          123
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          34535
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" @click="close">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
