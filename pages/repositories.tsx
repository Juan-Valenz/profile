import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { repository } from '../components/types';
import RepositoryCard from '../components/repositoryCard/repositoryCard';

interface Props {
  name?: string
}

const Repositories: React.FC<Props> = ({ }) => {
  const [repositories, setRepositories] = useState<repository[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/repositories')
      .then(res => res.json())
      .then(data => {
        setRepositories(data.repos)
        setLoading(false)
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
      {repositories.map(r=> <RepositoryCard name={r.name} description={r.description} topics={r.topics} languages={r.languages} urls={r.urls} updated={r.updated} created={r.created}/>)}
    </>
  );
}


export default Repositories