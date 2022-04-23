import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Socials from "../components/Socials"
import Heading from "../components/Heading"

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/socials`);
  const data = await res.json();
  
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
};

const Home = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Next.js aplication" />
      <Socials socials={socials} />
    </div>
  )
}

export default Home