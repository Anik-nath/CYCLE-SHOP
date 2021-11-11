import React from "react";
import logoIcon from "../../../images/title.png";

const Footer = () => {
  return (
    <div className="mt-14" style={{ backgroundColor: "#3b3b3b" }}>
      <footer className="body-font">
        <div
          className="
      container
      px-5
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
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="!"
              className="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-white
        "
            >
              <img src={logoIcon} alt="" />
              <span className="ml-3 text-xl text-white">CYCLE SHOP BD</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              quam?
            </p>
          </div>
          <div
            className=" justify-between
        flex-grow flex flex-wrap 
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
          >
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            text-white
            title-font
            font-medium
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-white
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="
            title-font
            font-medium
            text-white
            tracking-widest
            text-sm
            mb-3
          "
              >
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    First Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Second Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Third Link
                  </a>
                </li>
                <li>
                  <a href="!" className="text-gray-400 hover:text-gray-200">
                    Fourth Link
                  </a>
                </li>
              </nav>
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
        flex flex-wrap flex-col
        sm:flex-row
      "
          >
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2021 Copyright:
              <a href="!" className="text-gray-400 ml-1" target="_blank">
                Cycle shop BD
              </a>
            </p>
            <span
              className="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-2
          justify-center
          sm:justify-start
        "
            >
              <a href="!" className="text-gray-400 ">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="!" className="ml-3 text-gray-400 ">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="!" className="ml-3 text-gray-400 ">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="!" className="ml-3 text-gray-400 ">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="!" className="ml-3 text-gray-400 ">
                <i className="fab fa-instagram"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
