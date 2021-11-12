import React from "react";
import useAuth from "../Hooks/useAuth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


const Dashboard = () => {
    const {logout,user} = useAuth();
    let { path, url } = useRouteMatch();
    
  return (
    <div className="pt-24" id="dashboard">
      <div className="grid grid-cols-4 gap-4">
          <div className="mobile-menu text-center h-screen bg-gray-50">
            <div className="py-10 flex flex-col items-center">
                {
                    user?.photoURL ? <img className="h-10 w-10 border-2 rounded-full mr-2" src={user.photoURL} alt="" /> :   <i className="fas fa-user text-2xl text-green-500"></i>
                }
                <h2>{user.displayName}</h2>
                </div>
            <ul className="">
              <li>
                <Link
                  to={`${url}/makeAdmin`}
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Make Admin
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}`}
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                 Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/givenReview`}
                  className="block text-sm border px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Review
                </Link>
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
        <div className="">
       
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
