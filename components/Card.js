/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../components";
import { useRouter } from "next/router";
import Image from "next/image";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

import { useRecoilState } from "recoil";

import { modalState } from "../atoms/modalAtom";

function Card({ nome, rede, intro, endereco, celular, isDetail, id }) {
  const router = useRouter();
  const text = intro.length > 125 ? `${intro.substring(0, 125)} ...` : intro;

  const [isOpen, setIsOpen] = useRecoilState(modalState);

  const detailButton = () => {
    if (!isDetail) {
      router.push(`/artista/${id}`);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div
      className={`w-full sm:w-[370px] md:w-[370px] lg:w-[390px] flex flex-col items-center bg-[#3C3C3C] rounded-md ${
        isDetail ? "mb-4" : "mb-8"
      } ${isDetail ? "mr-5" : "mr-0"}`}
    >
      <img
        src="/header.png"
        alt="..."
        className="w-full h-[137px] rounded-l-md rounded-r-md"
      />

      <div className="-mt-14 rounded-2xl flex items-center bg-[#212121] p-[5.5px]">
        <Image
          src="/caio.png"
          alt="..."
          width={110}
          height={110}
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center">
        {/* nome */}
        <h1 className="text-[20px] text-white font-poppins leading-[30px] font-medium mt-4">
          {nome}
        </h1>
        {/* rede social */}
        <p className="text-[14px] text-[#A6A6A6] leading-[21px] font-normal mt-2">
          {rede}
        </p>
        {/* bio */}
      </div>
      {!isDetail && (
        <div className="flex h-24 w-full justify-center items-center mt-4">
          <p className="text-white mx-8 font-poppins text-[14px]">{text}</p>
        </div>
      )}

      {isDetail && (
        <div className="mb-8 mt-4">
          <div className="flex flex-row items-center mb-3">
            <MapPinIcon className="w-4 h-4 text-white" />
            <p className="text-white ml-2 text-[16px] ">{endereco}</p>
          </div>

          <div className="flex flex-row items-center">
            <PhoneIcon className="w-4 h-4 text-white" />
            <p className="text-white ml-2 text-[16px]">{celular}</p>
          </div>
        </div>
      )}
      <div className={`w-full ${isDetail ? "mb-1" : "mb-4"} sm:mb-4 sm:mt-4`}>
        <div className={`${isDetail ? "hidden" : "flex"} sm:flex mx-4`}>
          <Button
            isDetail={isDetail}
            onClick={detailButton}
            text={`${isDetail ? "Fazer doação" : "Ver perfil completo"}`}
            style="text-base"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
