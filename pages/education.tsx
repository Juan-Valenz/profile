import React from 'react'
import Head from 'next/head'
import styles from 'assets/styles/education.module.scss'
import EducationCard from '../components/educationCard/educationCard';



const educations = [
  {
  school: "Varia",
  school_url: "https://varia.vantaa.fi/fi/palveluhakemisto/palvelu/tieto-ja-viestintatekniikan-perustutkinto#tab-introduction",
  description: "Varia teaches several ICT orientations and one of them, which is the one I took, is programming.",
  start: new Date()
  }
]

const Education: React.FC = () => {
  
  return (
    <>
      <Head>
        <title>Juan Valenz | Education</title>
        <meta name="description" content="My studies." />
        <meta name="keywords" content="education, schools " />
        <meta name="author" content="Juan Valenzuela" />
      </Head>
      <section className={styles.container}>
        <header>
          <h2>Education</h2>
        </header>
        <div>
          {educations.map(e => <EducationCard key={e.school} school={e.school} school_url={e.school_url} description={e.description} start={e.start}/>)}
        </div>
      </section>
    </>
  );
}



export default Education