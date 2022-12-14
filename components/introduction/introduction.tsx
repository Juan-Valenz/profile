import React from 'react'
import styles from './introduction.module.scss'

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({ }) => (
  <section className={styles.container}>
    <img className={styles.image} alt='Cloud Service image' />
    <h2>
      <span>Let's set the building</span>
      <span>blocks of your cloud</span>
    </h2>
  </section>
);



export default Introduction