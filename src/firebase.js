import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYP6o7eCUF-mv1H34jMxtMlOxLgfVTBXI",
  authDomain: "disneyplus-clone-5e317.firebaseapp.com",
  projectId: "disneyplus-clone-5e317",
  storageBucket: "disneyplus-clone-5e317.appspot.com",
  messagingSenderId: "730704748180",
  appId: "1:730704748180:web:57276aa3198e1df2fd9e81"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
