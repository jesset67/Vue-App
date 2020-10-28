<template>
    <div id='main'>
        <div id="loginContainer">
            <div class="loginTxt">
                <div id="labels">
                <label for="email">Email: </label>
                <input ref="emailBox" type="text" class="emailBox" name="emailBox">
                <br>
                <label for="password">Password: </label>
                <input ref="passwordBox" type="password" class="passwordBox" name="passwordBox"> 
                </div>
                <br><br>    
                <b class="error" ref="errorMsg"></b>            
                <div class="buttonsContainer">
                <button @click="login()" id="studyLogin" value="Study">Study 📝</button>
       
                <button @click="sendMsgs()" id="sendMsgLogin" value="Send Message">Send Message 📩</button>
                
                <button @click="createAcc()" id="createAcc" value="Create Account">Create Account ➕</button>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>

import {db} from '../components/firebase'
// S = State your argument
// E = Explain your point
// X = eXample to demonstrate
// Y = whY this matters to your audience/end users.

// //  console.log() to output data/variables/objects to help you identify what is happening, what value is stored in that variable/array/object at the point in the program
// this helps you identify bugs and fix them
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
button {
    background-color: rgb(235, 235, 235);
    border: none;
    border-radius: 8px;
    transition: 0.3s;
}

button:hover {
    /* background: #DA22FF;  /* fallback for old browsers 
    /* background: -webkit-linear-gradient(to right, #9733EE, #DA22FF);  /* Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to right, #9733EE, #DA22FF); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-color: #6314ca;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

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
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loginTxt {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    align-content: center;
}

#labels {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 30%;
    flex-direction: column;
}

.buttonsContainer {
    height: 75%;
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
    width: 60%;
}

#sendMsgLogin {
    text-align: center;
    font-size: 1em;
    height: 30px;
    width: 60%;
}

#createAcc {
    text-align: center;
    font-size: 1em;
    height: 30px;
    width: 60%;
}

.error {
    color: red;
}

input {
    border: none;
    border-radius: 6px;

    box-shadow: inset 0 0 5px #000000;
    -moz-box-shadow: inset 0 0 5px #000000;
    -webkit-box-shadow: inset 0 0 5px #000000;
    background: white;
}

.emailBox {
    height: 25px;
    width: 65%;
}

.passwordBox {
    height: 25px;
    width: 65%;
}
</style>