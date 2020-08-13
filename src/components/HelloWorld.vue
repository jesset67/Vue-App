<template>
  <div class="hello">
    <h1>Voting Age Test</h1>
    <input ref="ageInput" type="text">
    <button @click="checkAge">Check Age</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      greeting: "Hello App..."
    }
  },
  methods: {
    checkAge() {
      // do stuff
      let age = this.$refs.ageInput.value
      alert("age is: " + age)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
