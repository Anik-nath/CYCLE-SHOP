import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const Register = () => {

  const {createUser} = useAuth();

  const [data,setData] = useState({});

  const handleField =(e)=>{
    const field = e.target.name;
    const value = e.target.value;
    // console.log(value);
    const newField = {...data};

    newField[field] = value;
    console.log(newField);
    setData(newField);
  }

  const handleSubmit =(e)=>{
    createUser(data.email, data.password);
    e.preventDefault();
  }


    return (
        <div className="pt-32">
        <div className="grid grid-cols-1 w-3/4 md:w-1/2 mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
            <h1 className="text-2xl font-semibold mb-6">Create an account</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="email"
                name="email"
                onBlur={handleField}
                placeholder="Email"
                required
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
                className="text-lg shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                onBlur={handleField}
                placeholder="password"
                required
              />
            </div>
            <div className="flex items-center justify-between flex-col">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign up
              </button>
              <div className="my-6">
                <span>If you have an account?</span>{" "}
                <Link
                  to="/login"
                  className="text-green-700 font-semibold underline text-lg"
                >
                  Sign in please
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;