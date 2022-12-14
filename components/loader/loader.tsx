import React from 'react'
import styles from './loader.module.scss'
interface LoaderProps {

}

const Loader: React.FC<LoaderProps> = ({ }) => (
    <video src="" controls loop></video>
);



export default Loader