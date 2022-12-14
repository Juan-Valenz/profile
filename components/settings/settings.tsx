import React, { useEffect, useState } from 'react'
import { useThemeState } from '../ThemeHook';
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
          <button onClick={() => setTheme('default')}><img src="/icons/default.svg" alt="default" /></button>
          <button onClick={() => setTheme('dark')}><img src="/icons/moon.svg" alt="moon" /></button>
          <button onClick={() => setTheme('light')}><img src="/icons/sun.svg" alt="sun" /></button>
        </div>
      </section>
    </div>
  );
}



export default Settings