import Head from "next/head";
import { Card, Pin, Header } from "../components";
import { fetchPosts } from "../utils/fetchPosts";

export default function Home({ user }) {
  return (
    <div className="bg-black">
      <Head>
        <title>Poço Da Draga</title>
      </Head>
      <main className="min-h-screen flex flex-col mx-auto max-w-[1440px]">
        <Header />
        <div className="px-5 py-5 lg:px-8 lg:py-8">
          <div>
            <h1 className="text-white text-[22px] font-medium font-poppins mb-2">
              Comunidades
            </h1>
            <Pin />
          </div>
          <div className="mt-4 sm:mt-12">
            <h1 className="text-white text-[22px] leading-[33px] font-medium font-poppins">
              História dos moradores
            </h1>
            <p className="text-white text-[16px] leading-[24px] mt-3">
              Aqui estão reunidas várias histórias sobre pessoas que vivem na
              comunidade.
            </p>
          </div>
          {console.log(user)}
          <div className="flex flex-wrap mt-10 justify-between">
            {user.map((item, index) => (
              <Card
                key={item.id}
                nome={item.nome}
                redeSocial={item.redeSocial}
                historia={item.historia}
                fotoPerfil={item.fotoPerfil}
                id={item._id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const user = await fetchPosts();
  return { props: { user } };
}
