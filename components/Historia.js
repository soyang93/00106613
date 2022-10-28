import React from "react";

function Historia({ text, createdAt }) {
  return (
    <div className="flex bg-[#3C3C3C] flex-1 mt-4 rounded-sm mb-8 w-full">
      <div className="flex flex-row px-4 py-4">
        <div>
          <h1 className="text-white font-poppins text-[20px] leading-[30px] font-medium">
            História
          </h1>
          <p className="text-[14px] text-[#A6A6A6] leading-[21px] font-poppins mt-[1px]">
            Desde {createdAt}
          </p>
          <p className="text-white mt-8 mb-8 font-poppins">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Historia;
