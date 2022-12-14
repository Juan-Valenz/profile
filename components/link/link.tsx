import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './link.module.scss';

interface LinkProps {
  url: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  name: string;
}

const CustomLink: React.FC<LinkProps> = ({ url, onClick, name }) => (
  <Link href={url}>
    <a className={styles.container} aria-current={useRouter().pathname === url} onClick={onClick}>
      <p>{name}</p>
    </a>
  </Link>
)
export default CustomLink;



interface PopUpLinkProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  name: string;
}
export const PopUpLink: React.FC<PopUpLinkProps> = ({ onClick, name }) => (
    <button className={styles.container} onClick={onClick} >
      <p>{name}</p>
    </button>
)


