import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../assets/Navigation.module.scss'

interface page {
  key: number;
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
    key: 0,
    url: '/',
    name: 'Home',
    img_url: '/home.svg'
  },
  {
    key: 1,
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
          pages && pages.map(page => <PageLink key={page.key} url={page.url} name={page.name} img_url={page.img_url} />)
        }
      </nav>
    </>
  )
}

const PageLink: React.FC<page> = ({key,url,img_url, name}) => {
  return (
    <Link key={key} href={url}>
      <a className={styles.link}>
        <p>{name}</p>
        <Image src={img_url} alt="Icon" width={50} height={50} />
      </a>
    </Link>
  )
}

export default Navigation
