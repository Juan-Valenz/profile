import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './navigation.module.scss'
import { page } from '../types'

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
  },
  {
    url: '/repositories',
    name: 'Projects',
    img: {
      url: '/github.svg',
      alt: 'github icon',
      width: 20,
      height: 20
    }
  }
]

const Navigation: React.FC = () => (
  <nav className={styles.nav}>
    {
      pages && pages.map(page => <PageLink key={page.url} url={page.url} name={page.name} img={page.img} />)
    }
  </nav>
)

const PageLink: React.FC<page> = ({ url, name, img }) => (
  <Link href={url}>
    <a className={styles.link}>
      <p>{name}</p>
      <Image src={img.url} alt={img.alt} width={img.width} height={img.height} />
    </a>
  </Link>
)

export default Navigation