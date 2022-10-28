import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Button } from "../components";
import Image from "next/image";

function Modal({ pix, banco, agencia, conta }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const teste = true;
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 sm:pt-8 overflow-auto"
        onClose={setIsOpen}
      >
        <div className="flex items-start justify-center min-h-[800px] sm:min-h-screen pt-2 sm:pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#5b7083] bg-opacity-40 transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-[#282828] rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl h-full sm:w-[500px]">
              <div className="mx-4 my-4">
                {/* header */}
                <div className="flex flex-row items-center justify-between">
                  <h1 className="text-white text-[22px] sm:text-[32px] font-poppins">
                    Doações
                  </h1>

                  <XMarkIcon
                    className="w-5 h-5 text-white cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <div className="flex flex-col bg-[#484848] rounded-md mt-2">
                  {/* atention box */}
                  <div className="mx-4 my-2">
                    <div className="flex flex-row items-center">
                      <ExclamationTriangleIcon className="w-5 h-5 text-white" />
                      <h1 className="text-white text-[18px] font-poppins ml-2">
                        Atenção
                      </h1>
                    </div>
                    <h1 className="text-white font-poppins text-[14px] mt-1 sm:mt-2">
                      Não intermediamos as transações feitas no site. Todo o
                      dinheiro doado é repassado diretamente para a conta
                      pessoal do artista/morador.
                    </h1>
                  </div>
                </div>
                {/* transferencia pix */}
                <div className="flex flex-col sm:flex-row">
                  <div className="flex flex-col bg-[#3C3C3C] w-full sm:w-[80%] mt-2 sm:mt-6 rounded-md justify-center items-center py-4 mr-4 h-min">
                    <h1 className="text-white font-poppins text-[18px]">
                      Transferência PIX
                    </h1>
                    {teste && (
                      <div className="hidden sm:flex flex-col mt-2 mb-2 text-center text-white">
                        <Image
                          src="/qr.jpeg"
                          alt="..."
                          width={150}
                          height={150}
                          className="rounded-l-md rounded-r-md"
                        />
                      </div>
                    )}

                    <div className="flex flex-row w-full mt-1 sm:mt-1">
                      <div className="flex flex-col w-full mx-1">
                        <div className="flex flex-row items-center justify-between py-2 bg-[#484848] w-full rounded-md">
                          <span className="text-white text-[15px] ml-3">
                            {pix}
                          </span>

                          <div className="flex flex-row cursor-pointer h-full mr-3 items-center">
                            <button className="sm:hidden text-white font-poppins text-[15px] active:bg-[#585858]">
                              copiar
                            </button>

                            <ClipboardDocumentCheckIcon className="hidden sm:flex w-4 h-4 text-white active:bg-[#585858]" />
                          </div>
                        </div>
                        <div className="flex mt-2 bg-[#484848] p-2 rounded-md">
                          <div className="flex justify-center items-center">
                            <UserIcon className="w-5 h-5 mr-2 text-white text-center" />
                          </div>

                          <h1 className="text-white font-poppins text-[12px] items-center text-center">
                            caio barroso de sousa
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* transferencia TED */}
                  <div className="flex flex-col bg-[#3C3C3C] w-full mt-2 sm:mt-6 rounded-md items-center px-4 py-4 h-min">
                    <h1 className="text-white font-poppins text-[18px] mb-1 sm:mb-4">
                      Transferência TED/DOC
                    </h1>
                    <div className="flex flex-col bg-[#484848] p-3 rounded-md w-full">
                      <h1 className="text-white font-poppins text-[18px]">
                        Banco: {banco}
                      </h1>
                      <h1 className="text-white font-poppins text-[18px] mt-1">
                        Agência: {agencia}
                      </h1>
                      <h1 className="text-white font-poppins text-[18px] mt-1 ">
                        Conta: {conta}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-2 sm:mt-8">
                  <Button
                    text="Cancelar"
                    style="bg-[#282828] border-[1px] rounded-md border-white w-[70%] mr-4 text-base"
                    onClick={() => setIsOpen(false)}
                  />
                  <Button
                    text="Confirmar transferência"
                    style="text-base hover:bg-[#585858]"
                  />
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
