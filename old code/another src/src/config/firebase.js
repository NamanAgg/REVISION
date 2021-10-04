import firebase from "firebase";
import firebaseConfig from "../secrets";

let firebaseApp=firebase.initializeApp(firebaseConfig);
export let firebaseAuth=firebaseApp.auth();
export let firebaseStorage=firebaseApp.storage();
export let firebaseDB=firebaseApp.firestore();
export let timeStamp=firebase.firestore.FieldValue.serverTimestamp;