<template>
  <div class="flex justify-center items-center border h-screen w-screen">

    <div id="operators" class="flex flex-col justify-center items-center">
      <div>
        <h1 class="font-bold font-['Poppins'] text-5xl">Math Quiz</h1>
        </div>
      <div class="grid md:grid-rows-1 md:grid-flow-col md:gap-x-10 md:gap-y-0 grid-rows-2 grid-flow-col gap-y-3 gap-x-3 justify-items-center my-32">

        <button id="addition" class="p-8 md:p-16 bg-green-300 rounded-full btn" @click="chooseOperators('+')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>


        <button id="subtraction" class="p-8 md:p-16 bg-green-300 rounded-full btn" @click="chooseOperators('-')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>

        <button id="mulitplication" class="p-8 md:p-16 bg-green-300 rounded-full btn" @click="chooseOperators('*')">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        <button id="division" class="p-8 md:p-16 bg-green-300 rounded-full btn" @click="chooseOperators('/')">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M400 224h-352c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.31 32-32S417.7 224 400 224zM224 144c26.47 0 48-21.53 48-48s-21.53-48-48-48s-48 21.53-48 48S197.5 144 224 144zM224 368c-26.47 0-48 21.53-48 48s21.53 48 48 48s48-21.53 48-48S250.5 368 224 368z"/></svg>
        </button>
      </div>
      
    </div>

  </div>
</template>

<script>
// import Appear from '../components/Appear.vue'

export default {
  name: "QuizOperators",

  // components: {
  //   Appear
  // },

  methods: {
    chooseOperators(operator) {
      this.$router.push({ name: 'QuizChoices', params: { data: operator }})
    }
  }
}
</script>

<style>

</style>