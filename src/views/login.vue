<template>
    <div id='main'>
        <div id="loginContainer">
            <div class="loginTxt">
                <label for="email">Email: </label>
                <input ref="emailBox" type="text" class="emailBox" name="emailBox">
                <br>
                <label for="password">Password: </label>
                <input ref="passwordBox" type="password" class="passwordBox" name="passwordBox">
                <br><br>    
                <p class="error" ref="errorMsg"></p>            
                <div class="buttonsContainer">
                <button @click="login()" id="studyLogin" value="Study">Study</button>
       
                <button @click="sendMsgs()" id="sendMsgLogin" value="Send Message">Send Message</button>
                
                <button @click="createAcc()" id="createAcc" value="Create Account">Create Account</button>
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
        login() {
            const emailInput = this.$refs.emailBox.value;
            const passwordInput = this.$refs.passwordBox.value;

           // console.log(email, password);

           db.collection("messages").where("email", "==", emailInput)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                     this.$refs.errorMsg.innerHTML = "This email is not in the database";
                } else {
                      querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    if (passwordInput == doc.data().password) {
                        this.$router.push({ name: 'Home', params: {email: emailInput, password: passwordInput }})
                    } else {
                        this.$refs.errorMsg.innerHTML = "Incorrect password";
                    }
                });
                }
              
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        },
        sendMsgs() {
            const emailInput = this.$refs.emailBox.value;
            const passwordInput = this.$refs.passwordBox.value;

            // check if pass matches email & pass in DB
            // if true
            db.collection("messages").where("email", "==", emailInput)
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                     this.$refs.errorMsg.innerHTML = "This email is not in the database";
                } else {
                      querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    if (passwordInput == doc.data().password) {
                        this.$router.push({ name: 'Messages Input', params: {email: emailInput, password: passwordInput }})
                    } else {
                        this.$refs.errorMsg.innerHTML = "Incorrect password";
                    }
                });
                }
              
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });


            // if false
            // provide error msg

        },
        createAcc() {
            const emailInput = this.$refs.emailBox.value;
            const passwordInput = this.$refs.passwordBox.value;

            this.$router.push({ name: 'Create New', params: {email: emailInput, password: passwordInput }})
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
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginTxt {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;
    text-align: center;
    margin-top: 20px;
    align-content: center;
}



.buttonsContainer {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-content: center;
    align-items: center;    
}

#studyLogin {
    text-align: center;
    font-size: 1em;
    height: 30px;
    width: 66%;
}

#sendMsgLogin {
    text-align: center;
    font-size: 1em;
    height: 30px;
    width: 66%;
}

#createAcc {
    text-align: center;
    font-size: 1em;
    height: 30px;
    width: 66%;
}

.error {
    color: red;
}
</style>