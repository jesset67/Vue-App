<template>
    <div id='main'>
        <div id="loginContainer">
            <div class="loginTxt">
                <p>Enter Email and Password of new user</p>
                <label for="nameBox">Name: </label>
                <input ref="nameBox" type="text" class="nameBox" name="nameBox">
                <label for="emailBox">Email: </label>
                <input ref="emailBox" type="text" class="emailBox" name="emailBox">
                <br>
                <label for="passwordBox">Password: </label>
                <input ref="passwordBox" type="text" class="passwordBox" name="passwordBox">
                <br><br>                
                <div class="buttonloginContainer">
                <input @click="createNewUser()" id="login" value="Create">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {db} from '../components/firebase'
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
        createNewUser() {
            const emailInput = this.$refs.emailBox.value;
            const passwordInput = this.$refs.passwordBox.value;
            const nameInput = this.$refs.nameBox.value;

            db.collection("messages").doc(emailInput).set({
                email: emailInput,
                password: passwordInput,
                name: nameInput
            }).then(function(){
                console.log("New user succesfully created.");
            }) .catch(function(error) {
                console.error("Error writing document: ", error);
            });
            this.$router.push({ name: 'Home', params: {email: emailInput, password: passwordInput, name: nameInput }})
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
    background-color: #9c88ff;
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
    text-align: center;
    font-size: 1em;
}


</style>