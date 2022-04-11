<template>
  <div class="flex justify-center items-center border h-screen w-screen">
    <div id="start" class="flex flex-col justify-center items-center" >
      <h1 class="font-bold font-['Poppins'] text-5xl ">Math Quiz</h1>
      <button @click="onStartButton" class="bg-green-300 my-16 py-5 px-16 font-semibold rounded-full"
      v-motion
      :initial="{ opacity:0 , x: -100, scale: 1 }"
      :enter="{ opacity: 1, x: 0 }"
      :delay="300"
      >START</button>
    </div>
  </div>
</template>

<script>


export default {
  name: "QuizHome",
  methods: {
    onStartButton() {
      this.$router.push('/quizoperators')
    },
    onAfterEnter(el) {
      console.log(el)
    },
    enter(el) {
      console.log(el)
    }
  }
}
</script>

<style>

</style>
