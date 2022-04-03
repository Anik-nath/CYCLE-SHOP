import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import DashHome from "./DashHome/DashHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import GivenReview from "./GivenReview/GivenReview";
import OrderList from "./OrderList/OrderList";
import AddProduct from "./AddProduct/AddProduct";
import Pay from "./Pay/Pay";
import ManageProducts from "./ManageProducts/ManageProducts";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { logout, user } = useAuth();
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();
  console.log(admin);

  return (
    <div className="pt-20">
      <div className="ml-6 md:ml-0 grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className="mobile-menu text-center h-full bg-gray-50">
          <div className="py-10 flex flex-col items-center">
            {user?.photoURL ? (
              <img
                className="h-10 w-10 border-2 rounded-full mr-2"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <i className="fas fa-user text-2xl text-gray-500"></i>
            )}
            <h2>{user?.displayName}</h2>
            <h2>{user?.email}</h2>
          </div>{" "}
          <hr />
          <ul className="text-left">
            <li className="pl-12">
              <Link
                to={`${url}`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-home"></i> Home
              </Link>
            </li>

            {admin && 
              <div>
                <li className="pl-12">
                <Link
                  to={`${url}/makeAdmin`}
                  className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
                >
                  <i className="fas fa-user-shield"></i> Make Admin
                </Link>
              </li>
              </div>
            }

            <li className="pl-12">
              <Link
                to={`${url}/orderList`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-shopping-basket"></i> My Orders
              </Link>
            </li>
            <li className="pl-12">
              <Link
                to={`${url}/pay`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fab fa-paypal"></i> Pay
              </Link>
            </li>
            <li className="pl-12">
              <Link
                to={`${url}/manageOrder`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-tools"></i> Manage All Orders
              </Link>
            </li>
            {admin &&<li className="pl-12">
              <Link
                to={`${url}/manageProduct`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-tools"></i> Manage All Product
              </Link>
            </li>}

           {admin && <li className="pl-12">
              <Link
                to={`${url}/addProduct`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-plus"></i> Add product
              </Link>
            </li>}
            <li className="pl-12">
              <Link
                to={`${url}/givenReview`}
                className="block text-sm  px-2 py-4 hover:bg-green-500 hover:text-white transition duration-300"
              >
                <i className="fas fa-align-center"></i> Give Review
              </Link>
            </li>
            <li className="pl-12">
              <button
                onClick={logout}
                className="py-2 my-4 px-6 text-left font-medium rounded-fullbg-green-500 text-white transition duration-300"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
        <div className="content col-span-3">
          <Switch>
            <Route exact path={path}>
              <DashHome></DashHome>
            </Route>
            <Route path={`${path}/orderList`}>
              <OrderList></OrderList>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/givenReview`}>
              <GivenReview></GivenReview>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/manageProduct`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
