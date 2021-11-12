import React from 'react';

const MakeAdmin = () => {
    return (
        <div id="makeAdmin" className="text-center">
              <h2 className="text-2xl font-semibold py-2 text-green-500">Make Admin</h2>
            <div className="flex justify-center mt-14">
                <input
                className="text-lg shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="email"
                />
                <button className="bg-green-500 rounded ml-2 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">Make Admin</button>
            </div>
        </div>
    );
};

export default MakeAdmin;