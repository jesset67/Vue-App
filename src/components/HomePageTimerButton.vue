<template>
<div>
      
      <div class="timerCircleContainer">
        <router-link to="/timer">
            <div id="timerCircle">
            <p class="timerButton">TIMER!</p>
            </div>
        </router-link>  
      </div>
      <h1 class="footerStyle">Made with ❤️ at Tai Wananga Tu Toa.</h1>
</div> 
</template>

<script>
export default {
  name: 'HomePageTimerButton',
  props: {
  }
}
</script>

<style scoped lang="scss">

.timerCircleContainer {
  height: 40%;
  width: 100%;
  background-color: purple;
}

#timerCircle {
  height: 100%;
  width: 100%;
  background-color: pink;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.timerButton {
  background-color: #bada55;
  border: solid 2px black;
  color: white;
  padding: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 3rem;
  height: 225px;
  width: 225px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 26px 2px;
}

.button {border-radius: 50%;}

.footerStyle {
  font-size: 20px;

}
</style>
