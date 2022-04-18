<template>
  <div class="flex justify-center items-center border h-screen w-screen" >
        <div id="start" class="flex flex-col justify-center items-center">
          <h1 class="font-bold font-['Poppins'] text-5xl">{{ num1 }} {{ operator }} {{ num2}}</h1>
          <div class="grid grid-flow-col content-center justify-items-center grid-rows-2 lg:flex lg:justify-center lg:items-center mt-10 gap-y-5 gap-x-5" >
            <button 
            class="bg-green-300 py-10 px-28 font-semibold rounded-full btn" 
            v-for="(item, key, index) in choices" :key="index"
            @click="checkAnswer(item)"
            >{{ item.result }}</button>
          </div>
          
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {

  name: "QuizChoices",
  data() {
    return {
      operator: "+",
      num1: Number(Math.floor(Math.random() * 11)),
      num2: Number(Math.floor(Math.random() * 11)),
      result: 0,
      choices: {
        choice1: {
          result: 0,
        },
        choice2: {
          result: 0,
        },
        choice3: {
          result: 0,
        },
        choice4: {
          result: 0,
        }
      },
      choicesList: []
    }
  },
  created() {
    this.operator = this.$route.params.data
    if(this.operator == undefined) {
      Swal.fire({
          icon: 'error',
          title: 'Something is wrong!',
          text: 'Please select again',
          allowOutsideClick: false,
        }).then(result => {
          if(result.isConfirmed) {this.$router.push('/quizoperators')}
        })
    }
    const operator = this.operator
    this.sendChoices()
    for(let i in this.choicesList){
      switch(operator) {
        case "+":
          this.choices[`choice${this.choicesList[Number(i)]}`].result = this.getOperator(Math.floor(Math.random() * 20), this.num2)
          break
        case "-":
          this.choices[`choice${this.choicesList[Number(i)]}`].result = this.getOperator(Math.floor(Math.random() * 20), this.num2)
          break
        case "*":
          this.choices[`choice${this.choicesList[Number(i)]}`].result = this.getOperator(Math.floor(Math.random() * 20), this.num2)
          break
        case "/":
          this.choices[`choice${this.choicesList[Number(i)]}`].result = this.getOperator(Math.floor(Math.random() * 20), this.num2)
          break
      }
    
    }
  },
  methods: {
    sendChoices() {
      let correctNum = Number(Math.floor(Math.random() * 4) + 1)
      const num1 = this.num1
      const num2 = this.num2
      let choicesList = [0, 1, 2, 3]
      const chosenIndex = choicesList.indexOf(correctNum-1)

      this.choices[`choice${correctNum}`].result = this.getOperator(num1, num2)
      this.result = this.choices[`choice${correctNum}`].result
      choicesList.splice(chosenIndex, 1)
      choicesList = choicesList.map(num => num + 1)
      this.choicesList = choicesList
    },
    getOperator(num1, num2) {
      let operator = this.operator
      const plus = num1 + num2
      const minus = num1 - num2
      const multiply = num1 * num2
      const divide = num1 / num2

      switch(operator) {
        case "+":
          return plus
          
        case "-":
          return minus
          
        case "*":
          return multiply
          
        case "/":
          return divide
          
      }

    },
    checkAnswer(id) {
      if(id.result == this.result) {
        Swal.fire({
          icon: 'success',
          title: 'Correct!',
          text: 'Try again?',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          confirmButtonColor: 'rgb(34 197 94)',
          cancelButtonText: 'No',
          cancelButtonColor: 'rgb(239 68 68)',
          allowOutsideClick: false
        }).then(result => {
          if(result.isConfirmed) {
            this.$router.push('/quizoperators')
          } else if(result.isConfirmed != true) {
            this.$router.push('/')
          }
        })
      } else if(id.result != this.result) {
        Swal.fire({
          icon: 'error',
          title: 'Wrong!',
          text: 'Try again?',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          confirmButtonColor: 'rgb(34 197 94)',
          cancelButtonText: 'No',
          cancelButtonColor: 'rgb(239 68 68)',
          allowOutsideClick: false
        }).then(result => {
          if(result.isConfirmed) {
            this.$router.push('/quizoperators')

          } else if(result.isConfirmed != true) {
            this.$router.push('/')
          }
        })
      }
    }
  }

}
</script>

<style>

</style>