<template>
  <div  class="container">
    <div class="item firestore">
      <q-input label="send message" v-model="message"  style="width: 350px"/>
      <q-btn label="Send Message To Firestore" @click="sendMessage(message)"/>
    </div>
    <div class="item auth">
      <q-btn label="Register With Google" @click="registerWithGoogle"/>
    </div>
    <div class="item functions">
      <q-input label="add number" type="number" v-model="number" style="width: 350px"/>
      <q-btn label="send to cloud function" @click="sendToCloud(number)"/>
    </div>
  </div>
</template>



<script>
import fb from '../middleware/firebase';
export default {
  name: 'PageIndex',
  data() {
    return {
      message: '',
      number: 0
    }
  },
  methods: {
    registerWithGoogle() {
      var provider = new fb.firebase.auth.GoogleAuthProvider();
      fb.firebase.auth()
        .signInWithPopup(provider)

    .then((result) => {
          var credential = result.credential;
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },

    sendMessage(message) {
      fb.firebase.firestore().collection(`test`).doc().set({message})
    },
    async sendToCloud(number) {
      const func = fb.firebase.functions().httpsCallable('multiNumber')
      const multiNumber = await func({number})
      console.log(`%c${multiNumber.data}`,  "font-size: 30px; color: pink;" )
    }
  }
}
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.item {
  padding: 2em;
  background: rgba(100,100,100,0.4);
}

</style>
