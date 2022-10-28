import React from "react";
import { Input } from "../components";

function Header() {
  return (
    <div className="banner-mobile sm:banner-web w-full">
      <Input />
      <div className="px-8 py-4">
        <h2 className="text-white text-[40px] leading-[60px] font-poppins font-semibold">
          Projeto Poço da draga
        </h2>
        <div className="mb-10">
          <p className="text-white text-[16px] leading-[24px] mt-6 font-normal font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dui
            duis euismod cursus tristique auctor quis. Nulla eu est sagittis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dui
            duis euismod cursus tristique auctor quis. Nulla eu est sagittis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dui
            duis euismod cursus tristique auctor quis. Nulla eu est sagittis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dui
            duis euismod cursus tristique auctor quis. Nulla eu est sagittis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dui
            duis euismod cursus tristique auctor quis. Nulla eu est sagittis
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
