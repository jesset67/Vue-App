<template>
<div id="main">
      <!-- This div contains the 'welcome' container -->
      <div id="welcome">
        <h1 style="font-size: 7vw;">Welcome, 👋 {{ name }}</h1>
      </div>
      <!-- This div contains the timer circle container -->
      <div class="timerCircleContainer">
          <b><p class="timerButton" @click="submitData()">START STUDYING🎓</p></b>
      </div>
      <!-- This container contains the footer -->
      <div class="footerContainer">
        <h1 class="footer">Made with ❤️ at Tai Wananga Tu Toa.</h1>
      </div>
</div> 
</template>

<script>
import {db} from '../components/firebase'
export default {
  name: 'Home',
  props: {
  },
  mounted() {
    // 1. go to firebase and get user with this email.
    console.log('from home mounted ' + this.userEmail)
    db.collection('messages').doc(this.userEmail).get().then((doc) => {
      this.name = doc.data().name;
      this.messages = doc.data().messages;
    } )


  },
  data() {
    return {
      userEmail: this.$route.params.email,    // This variable contains the user's email from the previous page. 
      name: '',                               // This variable is an empty string that is the name of the user. It is flexible and changes depending on who logged in. 
      messages: []                         
    }
  },
  methods: {
    // Pushes data to next page, 'Timer'.
    submitData() {
      this.$router.push({name: 'Timer', params: {name: this.name, messages: this.messages}})
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
  height: 40%;
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
