<template>
  <div class="container">
    <div class="item firestore">
      <q-input label="HACK FIRESTORE" v-model="message" style="width: 350px"/>
      <!--      <q-btn label="Send Message To Firestore" @click="tryToHuck(message)"/>-->
      <q-btn class="btn" label="Send" @click="tryToHuck(message)"/>
      <h3>ducksacaskcksackaskc</h3>
    </div>
    <div class="item auth">
      <q-btn label="Register With Google" @click="registerWithGoogle"/>
      <q-btn label="SignOut" @click="logout"/>
      <h3>sadasd</h3>
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
  created() {
    fb.firebase.firestore().collection('courses').doc('N12VJ5EiqmgVR3QPbbhy')
      .get()
      .then(r => console.log(r.data()))
      .catch(e => console.log(e.message))
  },

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

          localStorage.setItem('practice', JSON.stringify(user.uid));
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

    logout() {
      fb.firebase.auth().signOut();
      localStorage.setItem('practice', JSON.stringify(null));
    },

    sendMessage(message) {
      fb.firebase.firestore().collection(`test`).doc().set({message})
    },
    async sendToCloud(number) {
      const func = fb.firebase.functions().httpsCallable('multiNumber')
      const multiNumber = await func({number})
      console.log(`%c${multiNumber.data}`, "font-size: 30px; color: pink;")
    },
    tryToHuck(message) {
      fb.firebase.firestore().collection('courses').doc('4W31VKbEhct2NmbeNxQr')
        .collection('permissions').doc().set({message})
        .catch(e => console.log(e.message))
    }
  },

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

.item h3{
  background-color: yellow;
}


/*.item.firestore {*/
/*  padding: 4em;*/
/*  background: rgba(100, 100, 100, 0.4);*/
/*  position: relative;*/
/*  transition: 2s;*/
/*}*/

/*.btn {*/
/*  background-color: #26A69A;*/
/*  position: absolute;*/
/*  border-radius: 50%;*/
/*  width: 50px;*/
/*  top: 0%;*/
/*  right: 0%;*/
/*  transform: translateX(0%) translateY(0%);*/
/*  !*transform: rotate(360deg);*!*/
/*  !*border: 3px solid green;*!*/
/*  transition: 2s;*/
/*}*/

</style>
