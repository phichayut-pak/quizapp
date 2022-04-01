<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition
      enter-active-class="transition-all transform duration-300"
      enter-from-class="-translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all transform duration-300"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-10 opacity-0"
      mode="out-in"
      >
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
  
</template>

<script>
export default {
  name: "App"
}
</script>

<style>

</style>
