import React, { useEffect } from 'react'
import axios from 'axios'
import githubClient from './github_service'

interface Props {

}

const github = new githubClient()
const GithubList: React.FC<Props> = ({ }) => {
    useEffect(() => {
        github.getList();
    }, [])
    return (
        <section>
            <h2>Github Repositories</h2>
        </section>
    );
}



export default GithubList