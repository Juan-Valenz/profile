import React from 'react'
import styles from './repositoryCard.module.scss';
import { coding_language, urls } from '../types';

interface RepositoryCardProps {
    name?: string;
    description?: string;
    topics?: string[];
    languages?: coding_language[];
    urls?: urls;
    updated?: Date;
    created?: Date;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ name, description, topics, languages, urls, updated, created }) => {
    return (
        <div className={styles.container}>
            <header>
                <h3>{name}</h3>
                <p>{description}</p>
            </header>
            <div className={styles.links}>
                <h4>Links</h4>
                <div>
                    <a href={urls?.website}>
                        <img src="" alt="" />
                    </a>
                    <a href={urls?.github}>
                        <img src="" alt="" />
                    </a>
                </div>
            </div>
            <div className={styles.topics}>
                <h4>Topics</h4>
                <div></div>
            </div>
            <div className={styles.languages}>
                <h4>Languages</h4>
                <div></div>
            </div>
            <div className={styles.dates}>
                <p>Created: <time dateTime={created?.toDateString()}>{created?.toString()}</time></p>
                <p>Updated: <time dateTime={updated?.toDateString()}>{updated?.toString()}</time></p>
            </div>

        </div>
    );
}



export default RepositoryCard