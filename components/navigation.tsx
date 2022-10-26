import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../assets/navigation.module.scss'

interface page {
  url: string;
  name: string;
  img: img;
}

// interface svg {
//   d: string;
//   box: string;
// }
interface img {
  url: string;
  alt: string;
  width: number;
  height: number;
}
const pages: page[] = [
  {
    url: '/',
    name: 'Home',
    img: {
      url: '/home.svg',
      alt: 'home icon',
      width: 20,
      height: 20
    }
  },
  {
    url: '/education',
    name: 'Education',
    img: {
      url: '/education.svg',
      alt: 'education icon',
      width: 20,
      height: 20
    }
  }
]

const Navigation: React.FC = () => {
  return (
    <>
      <nav className={styles.nav}>
        {
          pages && pages.map(page => <PageLink key={page.url} url={page.url} name={page.name} img={page.img} />)
        }
      </nav>
    </>
  )
}

const PageLink: React.FC<page> = ({ url, name, img}) => {
  return (
    <Link href={url}>
      <a className={styles.link}>
        <p>{name}</p>
        <Image src={img.url} alt={img.alt} width={img.width} height={img.height} />
      </a>
    </Link>
  )
}

export default Navigation