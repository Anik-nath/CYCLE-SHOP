import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
      const user = {email}; 

    fetch('https://blooming-dawn-18027.herokuapp.com/users/admin',{
        method: 'PUT',
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        setSuccess(true);
      }
    })
    e.preventDefault();
  };
  const handleOnBlur =(e)=>{
      setEmail(e.target.value);
  }
    return (
        <div id="makeAdmin" className="text-center">
            <h2 className="text-2xl font-semibold py-2 text-green-500">Make Admin</h2>
            <div className="flex justify-center mt-14">
               <form onSubmit={handleSubmit} action="">
               <input
                className="text-lg shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="email"
                onBlur={handleOnBlur}
                />
                <button type="submit" className="bg-green-500 rounded ml-2 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">Make Admin</button>
               </form>
               {
                 success && <p>Admin maded succssfully</p>
               }
            </div>
        </div>
    );
};

export default MakeAdmin;