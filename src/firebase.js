import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBTAcffyvWpuG6Gzot_ykgc8ucHive_h4",
    authDomain: "hotstar-clone-65601.firebaseapp.com",
    projectId: "hotstar-clone-65601",
    storageBucket: "hotstar-clone-65601.appspot.com",
    messagingSenderId: "167109824660",
    appId: "1:167109824660:web:24673d8de8a81c30ba2481"
  };
  
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage};
export default db;
