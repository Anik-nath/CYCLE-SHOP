import React from "react";
import logoIcon from "../../../images/title.png";
import paymentcard from "../../../images/paymentcard.png";

const Footer = () => {
  return (
    <div className="myBlack-color">
      <footer className="body-font">
        <div
          className="
      container
      px-2
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
      border-b-2 border-green-600 
    "
        >
          <div className="md:w-64 w-full flex-shrink-0 md:px-0 px-5 text-left md:text-left">
            <a
              href="!"
              className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-left
          text-white
        "
            >
              <img src={logoIcon} alt="" />
              <span className="ml-3 text-xl font-semibold text-white">CYCLE SHOP BD</span>
            </a>
            <p className="mt-2 text-sm text-gray-400 text-justify">
              This is the best cycle and trusted cycle shop in your area. Enjoy
              your ride!The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
            </p>
            <div
              className="
          inline-flex
          sm:ml-auto sm:mt-0
          pt-4
          justify-center
          sm:justify-start
        "
            >
              <a href="!" className="text-gray-400 ">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="!" className="ml-4 text-gray-400 ">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="!" className="ml-4 text-gray-400 ">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="!" className="ml-4 text-gray-400 ">
                <i className="fab fa-instagram text-lg"></i>
              </a>
            </div>
          </div>
          <div
            className="justify-between
        flex-grow flex flex-wrap 
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
      "
          >
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            text-white
            title-font
            font-semibold
            uppercase
            tracking-widest
            text-lg
            mb-4 text-left
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 text-left flex flex-col gap-4">
                <li>
                <a href="/dashboard/orderList" className="text-gray-400 hover:text-gray-200">
                  Order List
                </a>
                </li>
               <li>
               <a href="/dashboard/pay" className="text-gray-400 py-4 hover:text-gray-200">
                  Payment
                </a>
               </li>
                <li>
                <a href="/wishlist" className="text-gray-400 hover:text-gray-200">
                  Your Wishlist
                </a>
                </li>
                <li>
                <a href="/login" className="text-gray-400 pt-4 hover:text-gray-200">
                  Login
                </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-semibold
            uppercase
            text-white
            tracking-widest
            text-lg
            mb-0
            text-left
          "
              >
                Our Company
              </h2>
              <nav className="list-none mb-10 text-left flex flex-col gap-1">
                <a href="/about" className="text-gray-400 hover:text-gray-200 py-4">
                About us
                </a>
                <a href="/contact" className="text-gray-400 hover:text-gray-200 pb-4">
                  Contact Us
                </a>
                <a href="/site" className="text-gray-400 hover:text-gray-200">
                 Site Map
                </a>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-semibold
            text-white
            tracking-widest
            text-lg
            mb-4 uppercase
            text-left
          "
              >
                Contact
              </h2>
              <div className="mb-10 text-gray-400">
                <div className="flex flex-row items-center gap-2 text-justify">
                  <i className="fas fa-map-marker-alt text-green-500 text-lg"></i>
                  <p>44 New Avenue, Chittagong, Bangladesh</p>
                  </div>
                <div className="py-4 flex flex-row items-center gap-2">
                  <i className="fas fa-phone text-green-500 text-lg"></i>
                  <p>0123 456 789</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <i className="fas fa-envelope text-green-500 text-lg"></i>
                  <p>cyclebd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="
        container
        mx-auto
        py-4
        px-5
        flex flex-row justify-between items-center
      "
          >
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Copyright:
              <a href="!" className="text-gray-400 ml-1" target="_blank">
                Cycle shop BD
              </a>
            </p>
            <div>
              <img className="md:w-full w-32 md:h-8 h-5" src={paymentcard} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
