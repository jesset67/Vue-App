<template>
<div id="main">
      <div id="welcome">
        <h1 style="font-size: 7vw;">Welcome, {{ name }}</h1>
      </div>

      <div class="timerCircleContainer">
            <div id="timerCircle">
            <router-link to="/timer">
            <p class="timerButton">START STUDYING</p>
            </router-link>  
            </div>
        
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
      name: '*Person' + "'s" + " name*"
    }
  },
  methods: {
    getName() {
      alert("What is your name?");
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
  height: 90%;
  width: 100%;
  background-color: #9c88ff;
}

#timerCircle {
  height: 90%;
  width: 100%;
  background-color: #9c88ff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.timerButton {
  background-color: #fbc531;
  border: solid 2px black;
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
  font-family: 'Overlock', cursive;
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
