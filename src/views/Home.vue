<template>
  <div class="home">
    <HomePageTimerButton/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePageTimerButton from "@/components/HomePageTimerButton.vue"

export default {
  name: 'Home',
  components: {
    HomePageTimerButton
  }
}
</script>
