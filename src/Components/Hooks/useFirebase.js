import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
import initalizeFirebase from "../Firebase/Firebase.init";

initalizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error,setError] = useState({});

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // sing in with google
  const googleSignIn = (location,history) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setError('');
        alert("Successfuly sign in")
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //sign out 
  const logout =()=>{
    signOut(auth).then(() => {
        setError('');
        alert('Sign out successfuly');
      }).catch((error) => {
        setError(error.message);
      });
  }
  //ovserve user 
  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user);
        } else {
         setUser({});
        }
      });
      return () => unSubscribe;
  },[auth])
  // create user with email and password
  const createUser =(email,password,name)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError('');
      const newUser = {email,displayName : name}
      setUser(newUser);
      alert('create new user')
    })
    .catch((error) => {
      setError(error.message);
      alert(error.message)
    });
  }
  // sign in with email and password
  const signInWithEmailPass =(email, password ,location,history)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        setError('');
        alert("login successfuly")
        const destination = location?.state?.from || '/';
        history.replace(destination);
    })
    .catch((error) => {
      setError(error.message);
      alert(error.message)
    })
  }
  
  return {
    user,
    googleSignIn,
    logout,
    createUser,
    signInWithEmailPass,
    error
  }
};
export default useFirebase;
