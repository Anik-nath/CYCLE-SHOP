import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoIcon from "../../../images/title.png";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <NavLink to="/home" className="flex items-center py-4 px-2">
                  <img src={logoIcon} alt="Logo" className="h-10 w-10 mr-2" />
                  <span className="font-semibold uppercase text-2xl">
                    CycleBD
                  </span>
                </NavLink>
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <NavLink
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#10B981",
                  }}
                  className="py-4 px-2 font-semibold "
                >
                  Home
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#10B981",
                  }}
                  to="/products"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Bicyles
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#10B981",
                  }}
                  to="/about"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  About
                </NavLink>
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#10B981",
                  }}
                  to="/contact"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Contact
                </NavLink>
                  {user?.email ? 
                  <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#10B981",
                  }}
                  to="/dashboard"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                >
                  Dashboard
                </NavLink> : ''
                }
                
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 ">
              {user?.email ? (
                <button
                  onClick={logout}
                  className="py-2 px-4 font-medium text-white bg-green-500 hover:bg-green-600 rounded-full transition duration-300"
                >
                  Sign out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="py-2 px-4 font-medium text-white bg-green-500 rounded-full hover:bg-green-600 hover:text-white transition duration-300"
                >
                  Sign In
                </NavLink>
              )}

              {user?.photoURL ? (
                <img
                  className="h-10 w-10 border-2 rounded-full mr-2"
                  src={user.photoURL}
                  alt=""
                />
              ) : (
                <i className="fas fa-user text-2xl"></i>
              )}
              {user?.displayName ? (
                <span>{user.displayName}</span>
              ) : (
                <span>Guest</span>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setShow(!show)}
                className="outline-none mobile-menu-button"
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {show ? (
          <div className="md:hidden mobile-menu text-center">
            <ul className="">
              <li className="active">
                <NavLink
                  to="/home"
                  className="block text-sm px-2 py-4 text-whitebg-green-500 font-semibold"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Bicyles
                </NavLink>
              </li>

             {
               user?.email ? 
               <li>
               <NavLink
                 to="/dashboard"
                 className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
               >
                 Dashboard
               </NavLink>
             </li> : ''
             }

              <li>
                {user?.email ? (
                  <button
                    onClick={logout}
                    className="py-3 w-full px-2 font-medium text-gray-500 hover:bg-green-500 hover:text-white transition duration-300"
                  >
                    Sign out
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    className="py-3 block px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                  >
                    Sign In
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navigation;
