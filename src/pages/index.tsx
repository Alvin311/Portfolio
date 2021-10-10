import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alvin Ho</title>
        <meta name="description" content="Alvin Ho - Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default Home
