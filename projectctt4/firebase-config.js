
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp8E1iTxz9JVt4E5ZvoMhwAUpPlSnnYwI",
  authDomain: "projectctt-6dc53.firebaseapp.com",
  projectId: "projectctt-6dc53",
  storageBucket: "projectctt-6dc53.appspot.com",
  messagingSenderId: "262650351300",
  appId: "1:262650351300:web:70e82eaff9fa97a3578391",
  measurementId: "G-WK0NNSCZ1Q",
  databaseURL: "https://projectctt-6dc53-default-rtdb.europe-west1.firebasedatabase.app/"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyDp8E1iTxz9JVt4E5ZvoMhwAUpPlSnnYwI",
  authDomain: "projectctt-6dc53.firebaseapp.com",
  projectId: "projectctt-6dc53",
  storageBucket: "projectctt-6dc53.appspot.com",
  messagingSenderId: "262650351300",
  appId: "1:262650351300:web:70e82eaff9fa97a3578391",
  measurementId: "G-WK0NNSCZ1Q",
  databaseURL: "https://projectctt-6dc53-default-rtdb.europe-west1.firebasedatabase.app/"
};

