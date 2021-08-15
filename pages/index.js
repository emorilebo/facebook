import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";


export default function Home() {
  return (
    <div >
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Facebook by Godfrey Lebo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
