import React, { useEffect } from 'react'
import Image from 'next/image'
import Navigation from '../navigation/navigation';
import styles from './layout.module.scss'
import Head from 'next/head';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
    
    return (
        <>
            <Head>
                <body className='light' />
            </Head>
            <header className={styles.header}>
                <Image className={styles.logo} src='/profile.svg' alt='Company Logo' width={30} height={30} />
                <Navigation />
                <button className={styles.colorScheme}><Image className={styles.logo} src='/sun.svg' alt='Color Schema Button' width={20} height={20} /></button>
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
}



export default Layout