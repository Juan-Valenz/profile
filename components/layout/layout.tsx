import React, { useEffect, useState } from 'react'
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import { Helmet } from 'react-helmet';
import styles from './layout.module.scss';
import { useThemeState } from '../themeHook';

interface Props {
    children: JSX.Element | JSX.Element[]
}
const Layout: React.FC<Props> = ({ children }) => {
    /*  VARIABLES   */
    const [theme, setTheme] = useThemeState();

    /*  Html    */
    return (
        <>
            <Helmet>
                <body className={theme} />
            </Helmet>
            <header className={styles.header}>
                <Logo url={'/'} img={{ url: '/icons/profile.svg', alt: 'Logo' }} />
                <Navigation />
            </header>
            <main className={styles.main}>{children}</main>
        </>
    );
}



export default Layout