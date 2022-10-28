import Head from "next/head";
import { Card, Pin, Header } from "../components";
import data from "../data.json";

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

          <div className="flex flex-wrap mt-10 justify-between">
            {data.map((item, index) => (
              <Card
                key={item.id}
                index={index}
                nome={item.nome}
                rede={item.redes}
                intro={item.bio}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   const user = await fetch("http://localhost:3000/api/data").then((res) =>
//     res.json()
//   );
//   return { props: { user } };
// }
