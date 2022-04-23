import Layout from "../components/Layout"
import Image from "next/image"
import Head from "next/head"
import youtubeImg from "../public/youtube-logo-png-46020.png"
import '../styles/globals.scss'
import Link from "next/link"

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montagu+Slab&family=Montserrat&display=swap" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={youtubeImg}
      width={500}
      height={350}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp
