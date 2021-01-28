// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//all we need to connect our front end to our firebase backend
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBOX98yTm9FQA1X0dHqHeeamU2UmPwyVwU",
  authDomain: "facebook-demo-e597b.firebaseapp.com",
  databaseURL: "https://facebook-demo-e597b.firebaseio.com",
  projectId: "facebook-demo-e597b",
  storageBucket: "facebook-demo-e597b.appspot.com",
  messagingSenderId: "516848862244",
  appId: "1:516848862244:web:ea76bf7791ebc35f0884b1",
  measurementId: "G-MB6GC0NSJ9",
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
//need to access database , önce realtime database kurduk 
const db =firebaseApp.firestore();
// this auth allow us to do things like logging ,signing etc
const auth=firebase.auth();
//we want to google login service
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;