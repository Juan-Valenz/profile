import React from 'react'
import styles from './educationCard.module.scss'
interface EducationCardProps {
    school: string;
    school_url: string;
    description: string;
    start?: Date;
    end?: Date;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, school_url, description, start, end }) => {
    return (
        <div className={styles.container}>
            <header>
                <h3><a href={school_url}>{school}</a></h3>
            </header>
            <section>
                {description}
            </section>
            <section>
                <div className={styles.links}>
                    <h4>Links</h4>
                    <div>
                        <a href={school_url}>
                            <img src="/icons/globe.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className={styles.dates}>
                    {start && <span> {start.toDateString()}</span>}
                    {end ? <span>{end.toDateString()}</span>:<span>→</span>}
                </div>
            </section>

        </div>
    );
}



export default EducationCard