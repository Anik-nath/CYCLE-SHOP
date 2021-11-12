import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import GivenReview from "./GivenReview/GivenReview";
import MakeAdmin from "./MakeAdmin/MakeAdmin";

const Dashboard = () => {
    const {logout,user} = useAuth();
  return (
    <div className="pt-24" id="dashboard">
      <div className="grid grid-cols-4">
        <div>
        <div className="mobile-menu text-center h-screen bg-gray-50">
            <div className="py-10 flex flex-col items-center">
                {
                    user?.photoURL ? <img className="h-10 w-10 border-2 rounded-full mr-2" src={user.photoURL} alt="" /> :   <i className="fas fa-user text-2xl text-green-500"></i>
                }
                <h2>{user.displayName}</h2>
                </div>
            <ul className="">
              <li>
                <a
                  href="#makeAdmin"
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Make Admin
                </a>
              </li>
              <li>
                <Link
                  to="/dashboard/orderList"
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Order List
                </Link>
              </li>
              <li>
                <a
                  href="#review"
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Review
                </a>
              </li>
		          <li>
             <button onClick={logout}
                className="py-3 w-full px-2 border font-medium text-gray-500 hover:bg-green-500 hover:text-white transition duration-300"
              >
                Sign out
              </button> 
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-3">
          <MakeAdmin></MakeAdmin>
          
          <GivenReview></GivenReview>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
