import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { seedDatabase } from '../seed'
const config={
  apiKey: 'AIzaSyC9CJ7xCqTh147B_CG8etN96Ct6aioNx6s',
  authDomain: "instagram-clone-bb640.firebaseapp.com",
  projectId: "instagram-clone-bb640",
  storageBucket: "instagram-clone-bb640.appspot.com",
  messagingSenderId: "468353710135",
  appId: "1:468353710135:web:4b3f82a7679fd0e759e7b2"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
// seedDatabase(firebase)
