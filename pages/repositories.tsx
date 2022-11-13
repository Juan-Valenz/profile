import React from 'react'
import Head from 'next/head'
import { repository } from '../components/types';
import GithubList from '../components/github_list/githubList';

interface Props {

}

const Repositories: React.FC<Props> = ({ }) => {
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

const Respository: React.FC<repository> = ({ name, description, languages, urls, updated, created }) => {
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