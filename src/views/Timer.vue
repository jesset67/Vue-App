<template>

  <div> 
    <div class="header">
      <h1>Timer Page</h1>
    </div> 
        
      <div id="startButtonContainer">

          <input ref="timerInput" type="number" class="timerInput">

        <div class="buttons">
          <button class="startButton" @click="startTimer">Start</button>
          <button class="resetButton" @click="resetTimer">Reset</button>
        </div>
          <h1 class="timer"> {{Timer}} </h1>
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
      Timer: 0
    }
  },
  methods: {
    startTimer() {
      this.Timer = this.$refs.timerInput.value
    },
    resetTimer() {
      this.Timer = 0
      this.$refs.timerInput.value = ''
    }

  }
}
</script>

<style scoped lang="scss">

.header {
  margin-top: 12px;
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
  border-radius: 4px; 
}
.startButton {
  .button5 {padding: 16px;}
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
  border-radius: 4px; 
}
.resetButton {
  .button5 {padding: 16px;}
}


</style>