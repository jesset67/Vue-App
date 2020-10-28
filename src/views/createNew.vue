<template>
    <div id='main'>
        <div id="loginContainer">
            <div class="loginTxt">
                <div id="header">
                <b>Enter Email and Password of new user</b>
                </div>
                <br>
                <div id="labels">
                <label for="nameBox">Name: </label>
                <input ref="nameBox" type="text" class="nameBox" name="nameBox">
                <br> 
                <label for="emailBox">Email: </label>
                <input ref="emailBox" type="text" class="emailBox" name="emailBox">
                <br>
                <label for="passwordBox">Password: </label>
                <input ref="passwordBox" type="password" class="passwordBox" name="passwordBox">
                </div>
                <br>  
                <br>             
                <div class="buttonloginContainer">
                <button @click="createNewUser()" id="create">Create</button>
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
    color: black;
}
#header {
    height: 20%;
    width: 100%;
    margin-top: 30px;
}
#loginContainer {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
}
.loginTxt {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

#labels {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 10px;
}

input[type=text]:focus {
  background-color: lightblue;
}

input[type=password]:focus {
    background-color: pink
}

.nameBox {
    height: 25px;
}

.emailBox {
    height: 25px;
}

.passwordBox {
    height: 25px;
}

.buttonLoginContainer {
    width: 100%;
    border: solid 2px green;
    height: 100%;
}

#create {
    width: 25vw;
    height: 5vh;
    border-radius: 8px;
    border: none;
}

input {
    border: none;
    border-radius: 6px;

    box-shadow: inset 0 0 5px #000000;
    -moz-box-shadow: inset 0 0 5px #000000;
    -webkit-box-shadow: inset 0 0 5px #000000;
    background: white;
}
</style>