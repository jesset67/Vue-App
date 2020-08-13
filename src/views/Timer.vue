<template>

  <div> 
      <h1>Timer Page</h1> 
        
      <div id="startButtonContainer">
          <button class="startButton">Start</button>
          <button class="resetButton">Reset</button>

          <h1 v-onclick> {{Timer}} </h1>
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
  }
}
</script>

<style scoped lang="scss">

#startButtonContainer {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
  background-color: red; /* Green */
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