<template>

    <div id="main">

      <!-- create an area here for msg's. give it a ref: ref="refName" -->
     
        <div id="messagesContainer">
          <div class="messages" ref="messages">{{messages}}</div>
        </div>


      <!-- create an area here for timer. give it a ref: ref="refName" -->


      <div id="timerContainer">
        <div class="timer" ref="timer">{{time}}</div>
      </div>
      

      <!-- create an area here for stop button. give it a ref: ref="refName" -->


      <div id="stopButtonContainer">
        <router-link to="/timer">
        <div class="stopButton" ref="stopButton">stop </div> 
        </router-link>
      </div>


    </div>

</template>

<script>
export default {
  name: 'Timer And Messages',
  props: {
    
  },
  data() {
    return {
      time: this.$route.params.time,
      messagesArray: ['i love you', 'keep going', 'keep it up', 'neva fold', 'stop having a break you lazy ass', 'procrastinating is for the weak'],
      messages: ''
    }
  },
  created() {
    this.countDownTimer()
  },
  methods: {
    countDownTimer() {
                if(this.time > 0) {
                    setTimeout(() => {
                        this.time -= 1
                        this.countDownTimer()
                    }, 1000)
                }
               

                const random = Math.floor(Math.random() * this.messagesArray.length);

                this.messages = this.messagesArray[random]

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
  height: 30%;
  width: 100%;
  margin-bottom: 10%;
  background-color: #9c88ff;
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
  margin: 7px;
  width: 100px;
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