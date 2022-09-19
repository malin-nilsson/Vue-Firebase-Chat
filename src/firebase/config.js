import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCVMb2uPpUAXk8OLKQOBhjGiyqJVvfnquc',
  authDomain: 'vue-live-chat-f4d86.firebaseapp.com',
  projectId: 'vue-live-chat-f4d86',
  storageBucket: 'vue-live-chat-f4d86.appspot.com',
  messagingSenderId: '335556608280',
  appId: '1:335556608280:web:9dd4a49d8c7fe02ec09e6d',
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
