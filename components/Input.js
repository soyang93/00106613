import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Input() {
  return (
    <div className="flex flex-row px-4 py-4  items-center">
      <img src="/Frame22.png" alt="..." className="w-[63px] h-[68px]" />
      <div className="flex h-12 bg-[#3C3C3C] w-[392px] ml-4 rounded-md  px-2 items-center">
        <MagnifyingGlassIcon className="w-6 h-6 text-white" />
        <input
          type="text"
          placeholder="Pesquisar.."
          className="placeholder-[#FFFFFF] text-[14px] outline-none bg-transparent ml-2 text-white font-normal font-poppins w-full h-full"
        />
      </div>
    </div>
  );
}

export default Input;
