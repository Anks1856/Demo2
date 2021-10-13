import React from "react";

const Demo = () => {
  return (
    <div className="mt-24">
      <div className="ml-7 h-24 bg-blue-lighter flex items-center relative shadow-ct rounded-sm">
        <div className="flex items-center bg-white w-52 h-16 text-left absolute -left-4 shadow-ct rounded-sm font-bold text-2xl text-blue-dark">
          <p>
            <i className="fas fa-file-prescription ml-5"></i>
            <span className="ml-3"> Create</span>{" "}
            <span className="ml-10">1</span>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Demo;
