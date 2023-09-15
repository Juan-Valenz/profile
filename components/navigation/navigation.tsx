import React, { useState } from 'react'
import styles from './navigation.module.scss'
import { page } from '../types'
import Link, { PopUpLink } from '../link/link'
import Image from 'next/image'
import { useModalContext } from '@rintsin/common-components'
import Settings from '../settings/settings'
import { timeout } from '../functions'

const pages: page[] = [
  {
    url: '/',
    name: 'Home'
  },
  {
    url: '/repositories',
    name: 'Projects'
  },
  {
    url: '/education',
    name: 'Education'
  }
]


const Navigation: React.FC = () => {
  const [hidden, setHidden] = useState(true);

  const { modal } = useModalContext();
  const display = () =>
    modal({
      showCloseOnRightCorner: false,
      content: <Settings />
    });
  return (
    <>
      <button className={styles.icon} aria-expanded={!hidden} aria-controls="nav" onClick={() => setHidden(e => e = !e)}>
        <Image src={!hidden ? '/icons/x.svg' : '/icons/burger.svg'} alt='expand navigation icon' layout='fill' />
      </button>
      <nav id='nav' className={`${styles.nav}`} aria-hidden={hidden}>
        {
          pages && pages.map(page => <Link key={page.url} url={page.url} name={page.name} onClick={async () => { await timeout(200); setHidden(e => !e) }} />)
        }
        <PopUpLink onClick={() => { display(); setHidden(e => !e) }} name={'Settings'} />
      </nav>
    </>
  )
}

export default Navigation