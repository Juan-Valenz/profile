import React, { useEffect, useState } from 'react'
import styles from './repositoryCard.module.scss';
import { coding_language, urls } from '../../types/github';

interface RepositoryCardProps {
    name?: string;
    description?: string;
    topics?: string[];
    languages_url?: string;
    urls?: urls;
    updated?: string;
    created?: string;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ name, description, topics, languages_url, urls, updated, created }) => {

    const [languages, setLanguages] = useState<coding_language[]>([])
    useEffect(() => {
        fetch('api/languages', { body: JSON.stringify({ "language_url": languages_url }) })
            .then(res => res.json())
            .then(data => {
                setLanguages(data.languages)
            })
            .catch(err => console.error(err.message))
    }, [])
    return (
        <div className={styles.container}>
            <header>
                <h3>{name}</h3>
                <p>{description}</p>
            </header>
            <section>
                <div className={styles.topics}>
                    <h4>Topics</h4>
                    <div>
                        {topics?.map(t => <div>{t.toString()}</div>)}
                    </div>
                </div>
                <div className={styles.languages}>
                    <h4>Languages</h4>
                    <div>
                        {languages.map(l =>
                            <div key={l.language}>
                                <p>{l?.language}</p>
                                <p>{JSON.stringify(l.amount)}</p>
                            </div>)}
                    </div>
                </div>
            </section>
            <section>

                <div className={styles.links}>
                    <h4>Links</h4>
                    <div>
                        <a href={urls?.github}>
                            <img src="/icons/github.svg" alt="" />
                        </a>
                        {urls?.website && <a href={urls?.website}>
                            <img src="/icons/globe.svg" alt="" />
                        </a>}
                    </div>
                </div>
                <div className={styles.dates}>
                    <p>Created: {created && new Date(created).toDateString()}</p>
                    <p>Updated: {updated && new Date(updated).toDateString()}</p>
                </div>
            </section>

        </div>
    );
}



export default RepositoryCard