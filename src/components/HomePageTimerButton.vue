<template>
<div id="main">

      <div id="welcome">
        <h1 style="font-size: 7vw;">Welcome, {{ name }}</h1>
      </div>
      <router-link to="/messagesInput">
      <p>Add messages</p>
      </router-link>
      <div class="timerCircleContainer">

              <router-link to="/timer">
               <b> <p class="timerButton">START STUDYING</p> </b>
              </router-link>  
        
      </div>
      
      <div class="footerContainer">
        <h1 class="footer">Made with ❤️ at Tai Wananga Tu Toa.</h1>
      </div>
</div> 
</template>

<script>
export default {
  name: 'HomePageTimerButton',
  props: {
  },
  data() {
    return {
      name: "Vikiani"
    }
  },
  methods: {
    getName() {
      this.$prompt("Input your name").then((text) => {
      
});
    }
  } 
}
</script>

<style scoped lang="scss">
/* 
main color: #9c88ff
accent color: #fbc531
*/ 

/* Header font */ @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@600&display=swap');
/* secondary font */ @import url('https://fonts.googleapis.com/css2?family=Overlock:wght@900&display=swap');
/* tertiary font */ @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #9c88ff;
}

#welcome {
  display: flex; 
  color: black;
  padding: 15px;
  font-family: 'Hind Madurai', sans-serif;
}

.timerCircleContainer {
  height: 50%;
  width: 100%;
  background-color: #9c88ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
}


.timerButton {
  background-color: #fbc531;
  color: white;
  border-radius: 50%;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 6vw;
  height: 150px;
  width: 150px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 50px 2px;
  font-family: 'Noto Sans JP', sans-serif;
  border: solid 2px grey;
}

.timerButton:hover {
  background-color: #e5fd94;
  color: rgb(0, 0, 0);
  cursor: pointer;
  transition: 0.3s;
}

.button {border-radius: 50%;}

.footer {
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 4vw;
  margin-bottom: 12px;
  margin-top: 60%;
}

.footerContainer {
  // margin-bottom: 10px;
  width: 100%;
  height: 10%;
}

a {
  text-decoration: none;
}
</style>
