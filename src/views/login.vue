<template>
    <div id='main'>
        <div id="loginContainer">
            <div class="loginTxt">
                <label for="email">Email: </label>
                <input ref="emailBox" type="text" class="emailBox" name="emailBox">
                <br>
                <label for="password">Password: </label>
                <input ref="passwordBox" type="text" class="passwordBox" name="passwordBox">
                <br><br>                
                <div class="buttonloginContainer">
                <input @click="login()" id="login" value="Login">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    props: {

    },
    data() {
        return {
            name: 'Vikiani'
        }
    },
    methods: {
        login() {
            const emailInput = this.$refs.emailBox.value;
            const passwordInput = this.$refs.passwordBox.value;

            this.$router.push({ name: 'Home', params: {email: emailInput, password: passwordInput }})
           // console.log(email, password);
        }
    }

}
</script>
<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
}
#loginContainer {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginTxt {
    display: flex;
    flex-direction: column;
    width: 70%;
}

#login {
    height: 40px;
    width: 60%;
}


</style>