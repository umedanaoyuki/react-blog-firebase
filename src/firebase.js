import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJ9bQxqd0jRakE8-q_fkwJVe8sVHnyPNc",
  authDomain: "react-blog-firebase-73eca.firebaseapp.com",
  projectId: "react-blog-firebase-73eca",
  storageBucket: "react-blog-firebase-73eca.appspot.com",
  messagingSenderId: "564782005792",
  appId: "1:564782005792:web:ef592164edc179acf28645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, provider, db};
