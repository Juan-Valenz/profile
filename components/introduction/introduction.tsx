import React from 'react'
import Image from 'next/image'
import styles from './introduction.module.scss'

interface IntroductionProps {

}

const Introduction: React.FC<IntroductionProps> = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>

      </div>
      <div className={styles.right}>
        <img className={styles.image} src='/cloud_server.png' alt='Cloud Service image'/>
      </div>
    </div>
  );
}



export default Introduction