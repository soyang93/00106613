import { useRouter } from "next/router";
import Head from "next/head";
import { Historico, Historia, Modal, Input, Card, Pin } from "../../components";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { modalState } from "../../atoms/modalAtom";
import { fetchPosts } from "../../utils/fetchPosts";
import { fetchPins } from "../../utils/fetchPins";

export default function DetailPage({ user, pins }) {
  const {
    nome,
    redeSocial,
    historia,
    endereco,
    celular,
    _createdAt,
    fotoPerfil,
    titularPix,
    banco,
    agencia,
    conta,
    qrCodePix,
    chavePix,
  } = user;

  const router = useRouter();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const date = new Date(_createdAt).toLocaleDateString();

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
              redeSocial={redeSocial}
              historia={historia}
              endereco={endereco}
              celular={celular}
              fotoPerfil={fotoPerfil}
              isDetail
            />

            <div className="hidden sm:flex flex-col">
              <h1 className="text-white text-[22px] font-medium font-poppins mb-2">
                Comunidades
              </h1>
              <Pin pins={pins} />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <Historico />
            <Historia text={historia} createdAt={date} />
          </div>
        </div>
        {isOpen && (
          <Modal
            pix={chavePix}
            banco={banco}
            agencia={agencia}
            conta={conta}
            qrCodePix={qrCodePix}
            titularPix={titularPix}
          />
        )}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const value = await fetchPosts();

  const ids = value.map((item) => item._id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const value = await fetchPosts();
  const pins = await fetchPins();
  const user = value.find((item) => item._id == context.params.id);
  return {
    props: {
      user,
      pins,
    },
    revalidate: 10,
  };
};
