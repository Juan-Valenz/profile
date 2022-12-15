import React from 'react'
import styles from './introduction.module.scss'
import Image from 'next/image'


const Introduction: React.FC = () => (
  <section className={styles.container}>
    <div className={styles.image}>
      <Image src="/images/cloud_server.png" alt="Cloud Service image" layout='fill' />
    </div>
    <h2>
      <span>Let's set the building</span>
      <span>blocks of your cloud</span>
    </h2>
  </section>
);



export default Introduction