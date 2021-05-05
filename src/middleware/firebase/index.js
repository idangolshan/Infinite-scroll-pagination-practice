import firebase from "firebase/app";
import firestore from 'firebase/firestore'
import storage from 'firebase/storage'
import functions from 'firebase/functions'
import auth from 'firebase/auth'

const fbInit = (config) => {
  return firebase.initializeApp(config)
}
const authentication = () => {
  return firebase.auth()
}



export default {
  firebase,
  fbInit,
  authentication,
}
