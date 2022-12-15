import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useThemeState } from '../themeHook';
import styles from './settings.module.scss'
interface SettingsProps {

}

const Settings: React.FC<SettingsProps> = () => {
  /*  VARIABLES   */
  const [theme, setTheme] = useThemeState();

  return (
    <div className={styles.modal}>
      <header>Settings</header>
      <section className={styles.themes}>
        <h2>Color theme:</h2>
        <div>
          <button onClick={() => setTheme('default')}><div><Image src="/icons/default.svg" alt="default" layout='fill'/></div></button>
          <button onClick={() => setTheme('dark')}><div><Image src="/icons/moon.svg" alt="moon" layout='fill'/></div></button>
          <button onClick={() => setTheme('light')}><div><Image src="/icons/sun.svg" alt="sun" layout='fill' /></div></button>
        </div>
      </section>
    </div>
  );
}



export default Settings