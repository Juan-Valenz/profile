import type { NextApiRequest, NextApiResponse } from 'next'
import { IRepo, repository } from '../../types/github'

const gitHubUsername = 'Juan-Valenz'
const GitHubReposUrl = `https://api.github.com/users/${gitHubUserName}/repos`

type Data = {
  repos: IRepo[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const data: IRepo[] = await fetch(GitHubReposUrl).then(x => x.json())
  const repository: repository
  res.status(200).json({repos: data})
  res.end()
}

export default handler