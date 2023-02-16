import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2Q0iF9uqkWaTULD1jzLUIgr-hcGNgnGo",
  authDomain: "live-chat-app-62b0a.firebaseapp.com",
  projectId: "live-chat-app-62b0a",
  storageBucket: "live-chat-app-62b0a.appspot.com",
  messagingSenderId: "982782827899",
  appId: "1:982782827899:web:44b3e70b57f5c2bbb2f1de"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timeStamp, projectAuth}