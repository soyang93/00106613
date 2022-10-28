import React from "react";
import { Button, Pin } from "../components";

import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Historico() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  return (
    <div className="flex bg-[#3C3C3C] rounded-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 w-full">
        <div className="">
          <h1 className="text-white font-poppins text-[20px] leading-[30px] font-medium mb-6">
            Histórico de ajuda
          </h1>
          <Pin isHistorico />
        </div>
        <div className="mt-4 sm:mt-0 sm:w-[252px]">
          <Button
            isDetail
            isHistorico
            onClick={() => setIsOpen(true)}
            text="Fazer doação"
          />
        </div>
      </div>
    </div>
  );
}

export default Historico;
