import { useRouter } from "next/router";
import Head from "next/head";
import { Historico, Historia, Modal, Input, Card, Pin } from "../../components";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import data from "../../data.json";
import { motion } from "framer-motion";

export default function DetailPage({ user }) {
  const {
    nome,
    redes,
    bio,
    endereco,
    celular,
    created_at,
    codigo_pix,
    banco,
    agencia,
    conta,
  } = user;

  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  return (
    <div className="bg-black">
      <Head>
        <title>Conheça</title>
      </Head>
      <main className="bg-black min-h-screen flex flex-col mx-auto max-w-[1440px]">
        <div className="flex flex-col">
          <Input />
          <div className="px-4">
            <div
              onClick={() => router.push("/")}
              className="flex flex-row items-center cursor-pointer w-32"
            >
              <ArrowLeftIcon className="w-[32px] h-[32px] text-white" />
              <h1 className="text-white ml-3 text-[20px] font-poppins">
                Voltar
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mx-4 mt-8">
          <div className="flex flex-col">
            <Card
              nome={nome}
              rede={redes}
              intro={bio}
              endereco={endereco}
              celular={celular}
              isDetail
            />

            <div className="hidden sm:flex flex-col">
              <h1 className="text-white text-[22px] font-medium font-poppins mb-2">
                Comunidades
              </h1>
              <Pin />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Historico />
            <Historia text={bio} createdAt={created_at} />
          </div>
        </div>
        {isOpen && (
          <Modal
            pix={codigo_pix}
            banco={banco}
            agencia={agencia}
            conta={conta}
          />
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  // const value = await fetch("http://localhost:3000/api/data").then((res) =>
  //   res.json()
  // );

  const ids = data.map((item) => item.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  // const value = await fetch("http://localhost:3000/api/data").then((res) =>
  //   res.json()
  // );
  const user = data.find((item) => item.id == context.params.id);
  return {
    props: {
      user,
    },
  };
};
