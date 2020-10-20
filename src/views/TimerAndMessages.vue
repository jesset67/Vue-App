<template>

    <div id="main">

      <!-- create an area here for msg's. give it a ref: ref="refName" -->
     
        <div id="messagesContainer">
          <div class="messages" ref="messages">{{messages}}</div>
        </div>


      <!-- create an area here for timer. give it a ref: ref="refName" -->


      <div id="timerContainer">
        <div class="timer" ref="timer">{{timeToDisplay}}</div>
      </div>
      

      <!-- create an area here for stop button. give it a ref: ref="refName" -->


      <div id="stopButtonContainer">
       
        <div class="stopButton" ref="stopButton" @click="stopTimer()">stop</div> 
    
      </div>


    </div>

</template>

<script>

export default {
  name: 'TimerAndMessages',
  props: {
    
  },
  data() {
    return {
      minutes: this.$route.params.time,
      nextMessageTime: 0,
      timeInSeconds: this.$route.params.time * 60,
      timeToDisplay: '',
      messagesArray: this.$route.params.messages,
      messages: '',
      intervals: [],
      currentMinutes: 0,
      currentSeconds: 0,
      name: this.$route.params.name
    }
  },
  mounted() {

    // this calculates the intervals to show messages based on the amount of minutes recieved from router/previous component input
      var intervalValue = 1
      for (var i = this.minutes; i > 0; i -= intervalValue ) {
        this.intervals.push(i)
      }
      console.log("this.intervals",this.intervals)

      //start timer
      this.countDownTimer();
      console.log("messages from db", this.messagesArray)
  },
  methods: {
    //this function calls every second
    countDownTimer() {

        if(this.timeInSeconds > 0) {
            setTimeout(() => {
                  this.timeInSeconds--;
                this.countDownTimer()
            }, 1000)
        }
        // this converts our seconds to minutes:seconds
        this.convertTime(this.timeInSeconds)
        // this loads message
        this.loadMessage()
    },
    convertTime() {
        // our time is mins
        // mins to seconds
        this.currentMinutes = Math.floor(this.timeInSeconds/60);
        this.currentSeconds = this.timeInSeconds - this.currentMinutes * 60;
        console.log(this.currentMinutes + ':' + this.currentSeconds)
        this.timeToDisplay = this.currentMinutes + ':' + this.currentSeconds;
    },
    loadMessage() {
        // load message every 5 mins
        // eg. 25.
        // output msg at 20,15,10,5
        // console.log("trying to load message")
        // console.log("this.currentMinutes",this.currentMinutes)
        // console.log("this.currentSeconds",this.currentSeconds)
        // console.log("this.intervals[0]",this.intervals[0])
      
        if (this.currentMinutes == this.intervals[0] && this.currentSeconds == 0) {

          console.log("showing message")
          console.log(this.currentMinutes, this.currentSeconds)
    
          // remove index 0
          this.intervals.shift();
          
          // motivation messages
          const random = Math.floor(Math.random() * this.messagesArray.length);
          this.messages = this.messagesArray[random]
          
        }

    },
    stopTimer() {
      //route back to previous page.
      var id = window.setTimeout(function() {}, 0);
      while (id--) {
          window.clearTimeout(id); // will do nothing if no timeout with id is present
      }

      this.$router.push({ path: '/timer' })

    }             
},                          
  
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@600&display=swap');

#main {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #9c88ff; 
}

#messagesContainer {
  height: 40%;
  width: 100%;
  background-color: #9c88ff;
}

#timerContainer {
  height: 30%;
  width: 100%;
  background-color: #9c88ff;
}

#stopButtonContainer {
  height: 10%;
  width: 100%;
  margin-bottom: 10%;
  background-color: #9c88ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


.stopButton {
  background-color: red; /* Red */
  border: none;
  color: white;
  align-items: center;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px; 
  width: 100px;
  margin-right: 10px;
}



.stopButton:hover {
  background-color: rgb(175, 22, 22);
  cursor: pointer;
  transition: 0.3s;
}

.messages {
  font-family: 'Varela Round', sans-serif;
  font-size: 3em;
  align-items: center;
  color: black;
  margin-top: 30px;
}

.timer {
  font-size: 4em;
  color: white;
}


</style>