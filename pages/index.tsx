import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Homepage/Hero'
import HeroLine from '../components/Homepage/HeroLine'
import Showcase from '../components/Homepage/Showcase'
import Subscribe from '../components/Homepage/Subscribe'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Workatee</title>
        <meta name="description" content="Workatee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Navbar />
       <Hero />
       <HeroLine color="red" />
       <Showcase />
       <HeroLine color="blue" />
       <Subscribe />
       <HeroLine color="green" />
       <Footer />
    </div>
  )
}

export default Home
