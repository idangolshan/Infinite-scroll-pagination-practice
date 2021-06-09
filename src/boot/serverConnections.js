import firebaseInstance from '../middleware/firebase'

export default async () => {
  const config = {
    // apiKey: "AIzaSyA_w8bhVSK7TbjN4p4ZAISLcvyLDm4A8vY",
    // authDomain: "flash-point-app.firebaseapp.com",
    // databaseURL: "https://flash-point-app-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "flash-point-app",
    // storageBucket: "flash-point-app.appspot.com",
    // messagingSenderId: "531955625983",
    // appId: "1:531955625983:web:96461dd59e55a387cb41ca",
    // measurementId: "G-SEH86V2VRP"
    apiKey: "AIzaSyCmdJEi5JIlzmpg4fRh7R49fDMGX9DDmkQ",
    authDomain: "flashdev-practice.firebaseapp.com",
    projectId: "flashdev-practice",
    storageBucket: "flashdev-practice.appspot.com",
    messagingSenderId: "1013451190937",
    appId: "1:1013451190937:web:a57ca2945bf33a2ba1be08",
    measurementId: "G-FZ24GZTD0X"
  }
  firebaseInstance.fbInit(config)

  firebaseInstance.firebase.auth().onAuthStateChanged( async function(user) {
    if (user) {
      window.user = user;
      localStorage.setItem('user', JSON.stringify(user.uid))
      console.log(`%c${window.user.uid}`, "font-size: 30px; color: green;")
      console.log(user)

    } else {
      // No user is signed in.
      console.log('no user')
    }
  });
}
