import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../assets/Navigation.module.scss'

interface page {
  url: string;
  name: string;
  img_url: string;
}

// interface svg {
//   d: string;
//   box: string;
// }

const pages: page[] = [
  {
    url: '/',
    name: 'Home',
    img_url: '/home.svg'
  },
  {
    url: '/shifts',
    name: 'Shifts',
    img_url: '/vercel.svg'
  }
]

const Navigation: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        {
          pages.map(page => {   // for each page on the list it will create a button to navigate to the page
            return (
              <Link href={page.url}>
                <a className={styles.link}>
                  <p>{page.name}</p>                          
                  <img src={page.img_url} className={styles.svg}/>
                </a>
              </Link>
            )
          })
        }
      </nav>
    </>
  )
}

export default Navigation
