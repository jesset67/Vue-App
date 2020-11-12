<template>

  <div> 
    <div id="main">


    <div class="header">
      <h1 style="font-size: 8vw">Timer Page</h1>
    </div> 
        
      <div id="startButtonContainer">
          <input ref="timerInput" type="number" class="timerInput">

        <!-- This div contains the buttons on the page. -->
        <div class="buttons">
          <button class="startButton" @click="startTimer">Start</button>
          <button class="resetButton" @click="resetTimer">Reset</button>
        </div>
        <br>
        <div id='errorContainer'>
          <b id="error" ref="errorMsg"></b>
        </div>
      </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Timer',
  props: {
    
  },
  data() {
    return {
      name: this.$route.params.name,          // This variable contains the user's name routered from the previous page. 
      messages: this.$route.params.messages   // This variable contains the messages that the user will see on the next page (motivational messages found at the top).
    }
  },
  methods: {
    // Function pushes the inputted time to the next page. 
    startTimer() {
      let timeFromInput = this.$refs.timerInput.value
     if (timeFromInput > 0) {
       this.$router.push({ name: 'Timer And Messages', params: { time: timeFromInput, messages: this.messages, name: this.name } }) 
       } else {
          this.$refs.errorMsg.innerHTML = "Please input a larger number"
       }
         // route to TimerAndMessages route, passing in the timer value as a parameter 
    },
    // This function resets the time in the input to 0 or null. 
    resetTimer() {
      this.Timer = 0
      this.$refs.timerInput.value = ''
    }

  }
}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@600&display=swap');

#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #9c88ff; 
}

.header {
  margin-top: 100px;
  color: white;
  font-family: 'Hind Madurai', sans-serif;
}

#startButtonContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12px;
  flex-direction: column;
}

.timerInput {
  padding: 15px;
  font-size: 16px;
  text-align: center;
}

.buttons {
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
}

.startButton { 
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px; 
  margin: 8px;
  width: 100px;
}



.resetButton {
  background-color: red; /* Red */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px; 
  margin: 7px;
  width: 100px;
}

.startButton:hover {
  background-color: rgba(152, 248, 88, 0.795);
  cursor: pointer;
  transition: 0.3s;
}

.resetButton:hover {
  background-color: rgb(175, 22, 22);
  cursor: pointer;
  transition: 0.3s;
}

.timer {
  color: white;
  margin-top: 20px;
}

#error {
  color: rgb(206, 44, 44);
}
</style>