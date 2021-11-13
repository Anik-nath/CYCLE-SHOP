import React from "react";
import logoIcon from "../../../images/title.png";

const DashHome = () => {
  return (
    <div className="pt-24">
        <div className="mx-auto w-full flex justify-center">
        <img src={logoIcon} alt="Logo" className="h-10 w-10 mr-2" />
        </div>
      <h2 className="text-2xl font-semibold text-green-500 text-center mb-6">
        Overall Survey Report </h2>
      <div class="relative pt-1 md:w-3/4 w-3/4 mx-auto">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
              Our delivery response
            </span>
          </div>
          <div class="text-right">
            <span class="text-md font-semibold inline-block text-green-600">
              70%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-md flex rounded bg-green-200">
          <div
            style={{ width: "70%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>

      <div class="relative py-4 md:w-3/4 w-3/4  mx-auto">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
              Client Good Review
            </span>
          </div>
          <div class="text-right">
            <span class="text-md font-semibold inline-block text-green-600">
              80%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-md flex rounded bg-green-200">
          <div
            style={{ width: "80%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>

      <div class="relative pt-1 md:w-3/4 w-3/4 mx-auto">
        <div class="flex mb-2 items-center justify-between">
          <div>
            <span class="text-md font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
              Good Quality Product
            </span>
          </div>
          <div class="text-right">
            <span class="text-md font-semibold inline-block text-green-600">
              90%
            </span>
          </div>
        </div>
        <div class="overflow-hidden h-2 mb-4 text-md flex rounded bg-green-200">
          <div
            style={{ width: "90%" }}
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
