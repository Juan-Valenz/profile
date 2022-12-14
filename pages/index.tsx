import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from 'assets/styles/index.module.scss'
import Introduction from '../components/introduction/introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* <body className='light'/> */}
        <title>Juan Valenz | Portfolio</title>
        <meta name="description" content="General Description about myself, my work and hobbies." />
        <meta name="keywords" content="enterprise website development, bussiness website development ,sanitary website development,UI ,UX ,Website developer ,Website ,Cleaning Service ,freelancer ,web developer ,programmer,Portfolio,HTML, CSS, JavaScript, enterprise, business" />
        <meta name="author" content="Juan Valenzuela" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className={styles.header}>
        <Introduction/>
      </header>
    </>
  )
}

const header: React.FC = () => (
  <div >
  </div>
)

export default Home
