import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initalizeFirebase =()=>{
    initializeApp(firebaseConfig);
}
export default initalizeFirebase;