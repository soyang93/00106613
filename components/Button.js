import React from "react";

function Button({ onClick, isHistorico, text, style }) {
  return (
    <button
      className={`bg-[#484848] ${
        isHistorico ? "h-[92px]" : "h-[50px]"
      } w-full rounded-md text-white ${
        isHistorico ? "text-[18px]" : "text-[12px]"
      } font-normal font-poppins hover:bg-[#282828] ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
