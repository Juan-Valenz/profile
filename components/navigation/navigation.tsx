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
    url: '/education',
    name: 'Education'
  },
  {
    url: '/repositories',
    name: 'Projects'
  }
]


const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const { modal } = useModalContext();
  const display = () =>
    modal({
      showCloseOnRightCorner: true,
      content: <Settings />,
    });
  return (
    <>
      <nav className={`${styles.nav}`} aria-expanded={expanded}>
        {
          pages && pages.map(page => <Link key={page.url} url={page.url} name={page.name} onClick={async()=>{ await timeout(200) ;setExpanded(e=>!e)}} />)
        }
        <PopUpLink onClick={()=>{display(); setExpanded(e=>!e)}} name={'Settings'} />
      </nav>
      <button className={styles.icon} aria-expanded={expanded} onClick={() => setExpanded(e => e = !e)}>
        <Image src={expanded ? '/icons/x.svg' : '/icons/burger.svg'} alt='expand navigation icon' layout='fill' />
      </button>
    </>
  )
}

export default Navigation