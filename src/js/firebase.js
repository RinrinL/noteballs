// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqAb699slINdy-uwlwPoDQ8tjWNkSTAqk',
  authDomain: 'noteballs-2e2a5.firebaseapp.com',
  projectId: 'noteballs-2e2a5',
  storageBucket: 'noteballs-2e2a5.appspot.com',
  messagingSenderId: '889897882030',
  appId: '1:889897882030:web:5fd9dd1fd87ca206f9b83f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}
