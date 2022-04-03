import React, { useState } from "react";
import { Link,useHistory,useLocation } from "react-router-dom";
import google from '../../../images/google.png';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {user,googleSignIn,logout,signInWithEmailPass} = useAuth();

  const [data,setData] = useState({});

  const history = useHistory();
  const location = useLocation();

  const handleField =(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    // console.log(value);
    const newField = {...data};

    newField[field] = value;
    console.log(newField);
    setData(newField);
  }

  const handleGoogle =()=>{
    googleSignIn(location,history);
  }
  const handleSignOut =()=>{
    logout();
  }

  const handleSingIn =(e)=>{
    signInWithEmailPass(data.email,data.password,location,history);
    e.preventDefault();
  }

  return (
    <div className="pt-32">
      <div className="grid grid-cols-1 w-3/4 md:w-1/2 mx-auto">
        <form onSubmit={handleSingIn} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
          <h1 className="text-2xl font-semibold mb-6">Please Sign in</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              onBlur={handleField}
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="text-lg shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              onBlur={handleField}
              placeholder="password"
            />
          </div>
          <div className="flex items-center justify-between flex-col">
          {
              user?.email ? 
              <button onClick={handleSignOut}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign out
            </button>
            :
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign in
            </button>
            }
            
            <div className="my-6">
              <span>If you have no account?</span>{" "}
              <Link
                to="/register"
                className="text-green-700 font-semibold underline text-lg"
              >
                Create an account
              </Link>
            </div>
            <span className="mb-6 text-gray-400">----OR----</span>
            <button onClick={handleGoogle}
              className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
           <img className="w-6 mr-2" src={google} alt="" /><span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
