<template>
  <div class="flex flex-center">
    <div style="width: 350px">
      <q-input v-model="message"/>
    </div>
   <p>{{message}}</p>
      <q-btn label="Send Message To Firestore" @click="sendMessage(message)"/>
      <q-btn label="Register With Google" @click="registerWithGoogle"/>

  </div>
</template>

<script>
import fb from '../middleware/firebase';
export default {
  name: 'PageIndex',
  data() {
    return {
      message: ''
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
    }
  }
}
</script>
