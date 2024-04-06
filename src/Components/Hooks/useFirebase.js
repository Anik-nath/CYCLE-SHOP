import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect } from "react";
import initalizeFirebase from "../Firebase/Firebase.init";

initalizeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error,setError] = useState({});
  const [admin,setAdmin] = useState(false);
  const [isLoding,setIsLoding] = useState(true);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  // sing in with google
  const googleSignIn = (location,history) => {
    setIsLoding(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setError('');
        alert("Successfuly sign in")
        saveUser(user.email, user.displayName, 'PUT')
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=> setIsLoding(false));
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
        setIsLoding(false);
      });
      return () => unSubscribe;
  },[auth]);


  useEffect(()=>{
    fetch(`https://cycling-server-153ll8upe-aniknath.vercel.app/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  },[user.email])


  // create user with email and password
  const createUser =(email,password,name)=>{
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setError('');
      const newUser = {email,displayName : name}
      setUser(newUser);
      //save user
      saveUser(email,name,'POST');
      alert('create new user')
    })
    .catch((error) => {
      setError(error.message);
      alert(error.message)
    })
    .finally(()=> setIsLoding(false));
  }
  // sign in with email and password
  const signInWithEmailPass =(email, password ,location,history)=>{
    setIsLoding(true);
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
    .finally(()=> setIsLoding(false));
  }
  
  const saveUser =(email,displayName,method)=>{
    const user = {email,displayName};
    fetch('https://cycling-server-153ll8upe-aniknath.vercel.app/users/users',{
      method :method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) 
    })
    .then()

  }
  return {
    user,
    googleSignIn,
    logout,
    createUser,
    signInWithEmailPass,
    error,
    admin,
    isLoding
  }
};
export default useFirebase;
