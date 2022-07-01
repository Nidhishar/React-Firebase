// import { apps } from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { firebase } from '@firebase/app';




// if (!apps?.length) {
const firebaseConfig = {
    apiKey: "AIzaSyBrwJJXXwnmxecaXeo7glg7heJOKJQ5iaQ",
    authDomain: "fir-test-dbf10.firebaseapp.com",
    projectId: "fir-test-dbf10",
    storageBucket: "fir-test-dbf10.appspot.com",
    messagingSenderId: "218950466547",
    appId: "1:218950466547:web:825d83bce0852948df7086",
    measurementId: "G-XB8SXH474Y"
}
firebase.initializeApp(firebaseConfig)
// }

const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()


export {
    storage,
    db,
    auth,
}
