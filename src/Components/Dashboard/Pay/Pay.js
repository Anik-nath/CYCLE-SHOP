import React from 'react';

const Pay = () => {
    return (
        <div id="review" className="text-center pt-2">
      <h2 className="text-2xl font-semibold text-green-500">
        Payment Total : RS 0
      </h2>
      <div className="flex flex-col items-center mt-8">
        <form className="mb-4 mr-6">
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Your address"
            name="address"
          />

          <div className="flex gap-4">
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Your city"
            name="city"
          />
            <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="postcode"
            type="text"
            placeholder="Your postcode"
            name="postcode"
          />
          </div>

          <textarea
            className="form-textarea p-2 w-full border focus:outline-none"
            rows="5"
            placeholder="Optinal Notes"
          ></textarea>

            <div className="flex gap-4 items-center py-4">
            <input type="checkbox"  id="info" /><span>save this information in next time</span>
            </div>

          <button className="bg-green-500 w-full rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">
            Process
          </button>
        </form>
      </div>
    </div>
    );
};

export default Pay;