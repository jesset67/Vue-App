<template>
    <div id="nav">
    <div class="navContainer">
      <router-link to="/Feature1">
      <img class="icon" alt="home icon" src="../assets/homebutton.png"/>
      </router-link>
    </div>
    <div class="navContainer">
      <router-link to="/Feature2">
        <img class="icon" alt="home icon" src="../assets/info.png">
        </router-link>
    </div>

</div>
</template>

<script>
export default {
    name: "NavButtons",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>

    #nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .icon {
        width: 50px;
        height: 50px;
        background-color: #bada55;
        display: flex;
        
    }

    .navContainer {
        padding: 30px;
    }
</style>