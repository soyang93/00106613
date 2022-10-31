import React from "react";

function Pin({ isHistorico }) {
  const info = [
    "Pescaria",
    "Skate",
    "Artista de rua",
    "Surf",
    "Grafite",
    "Dança",
  ];
  const donations = ["512 doações", "410 compartilhamentos"];

  const data = isHistorico ? donations : info;
  return (
    <div
      className={`flex flex-wrap ${
        isHistorico && "justify-between"
      } sm:justify-start`}
    >
      {data.map((item) => (
        <a
          className={`bg-[#484848] ${
            !isHistorico && "mr-2"
          } sm:mr-2 text-white rounded-md font-poppins text-[13px] sm:text-[12px] leading-[18px] px-4 py-2 mb-2 ${
            isHistorico && "w-[48%]"
          } sm:w-auto flex justify-center items-center`}
          key={`${item}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default Pin;
