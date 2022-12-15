import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import RepositoryCard from '../components/repositoryCard/repositoryCard';
import { repository } from '../types/github';
import styles from 'assets/styles/repositories.module.scss'


const Repositories: React.FC = ({ }) => {
  const [repositories, setRepositories] = useState<repository[]>([])
  useEffect(() => {
    fetch('api/repositories')
      .then(res => res.json())
      .then(data => {
        setRepositories(data.repos)
      })
      .catch(err => console.error(err.message))
  }, [])

  return (
    <>
      <Head>
        <title>Juan Valenz | Repositories</title>
        <meta name="description" content="My repositories from github." />
        <meta name="keywords" content="github, repositories, portfolio " />
        <meta name="author" content="Juan Valenzuela" />
      </Head>
      <section className={styles.container}>
        <header>
          <h2>Github Repositories</h2>
        </header>
        <div>
          {repositories.map(r => <RepositoryCard key={r.name} name={r.name} description={r.description} topics={r.topics} languages_url={r.languages_url} urls={r.urls} updated={r.updated} created={r.created} />)}
        </div>
      </section>
    </>
  );
}


export default Repositories