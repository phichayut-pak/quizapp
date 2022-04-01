<template>
  <div class="h-screen w-screen flex flex-col justify-center items-center">
    <button @click="isOpen = !isOpen" class="fixed mb-20 p-3 rounded-full bg-indigo-400 border text-white font-bold">Click here!</button>
    
    <transition mode="out-in"
    enter-active-class="transition-all transform duration-300 ease-in"
    enter-from-class="translate-y-6 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all transform duration-300 ease-out"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-6 opacity-0"
    >
      <p v-if="isOpen">hello</p>
      <p v-else>hello world</p>
    </transition>

  </div>
</template>

<script>
// import { Switch } from '@headlessui/vue'

export default {
  components: {
    // Switch,
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    setOpen() {
      if(this.isOpen == false) {
        this.isOpen = true
      } else { this.isOpen = false}
      console.log(this.isOpen)
    },
    setEnable() {
      if(this.enabled == false ){
        this.enabled = true
      } else { this.enabled = false }
    }
  }
}
</script>

<style>

</style>