import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import GithubList from '../components/github_list/githubList';
import { repository } from '../components/types';

interface Props {
  name?: string
}

const Repositories: React.FC<Props> = ({ }) => {
  const [repoData, setRepoData] = useState<repository[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/github')
      .then(res => res.json())
      .then(data => {
        setRepoData(data.repos)
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
       <GithubList/>
    </>
  );
}

const Respository: React.FC<Props> = ({ name }) => {
  return (
    <section>
      <header>
        <h2>{name}</h2>
        <p>{description}</p>
      </header>
      <h3>
        Languages
      </h3>
      {languages.map(l => (
        <>
          <p>{l.language}</p>
          <p>{l.amount}</p>
        </>
      ))}
      <p>{urls.website}</p>
      <p>{urls.github}</p>
    </section>
  )
}


export default Repositories