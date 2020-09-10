<template>
    <div id="nav">
    <div class="navContainer">

      <router-link to="/">
        <img class="icon" alt="home icon" src="../assets/homebutton.png"/>
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
        bottom: 20px;
        width: 80%;
        display: flex;
        justify-content: center;
    }

    .icon {
        margin-bottom: 30px;
        margin-left: 0px;
        width: 50px;
        height: 50px;
        background-color: #9c88ff;
        display: flex;    
    }

    .icon:hover {
        background-color: #c2b6ff;
        cursor: pointer;
        transition: 0.3s;
    }

    .navContainer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>