import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="flex flex-col items-center justify-center py-5"
      >
        <img
          className="md:w-1/2"
          loading="lazy"
          src="https://i.ibb.co/C0B5cqg/20602785-6325254.jpg"
          alt="404"
        />
        <div className="font-semibold text-lg capitalize">
            <a className="underline p-2" href="/">Back to home</a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
