import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { img } from '../types';
import styles from './logo.module.scss';

interface LogoProps {
    url: string;
    img: img;
}

const Logo: React.FC<LogoProps> = ({ url, img }) => {
    return (
        <Link href={url}>
            <a className={styles.container}>
                <Image src={img.url} alt={img.alt} layout='fill'/>
            </a>
        </Link>
    );
}



export default Logo