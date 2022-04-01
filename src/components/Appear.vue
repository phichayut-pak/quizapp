<template>
  <div>
    <transition
    enter-active-class={}

    >
      <slot/>
    </transition>
  </div>
</template>

<script>
export default {

  methods: {
    beforeEnter(el) {
      el.class = `transition-all transform -translate-x-10 bg-red-300`
    },
    enter(el) {
      el.class = `transition-all transform translate-x-0 duration-300 delay-300`
    }
  }
}
</script>

<style>

</style>