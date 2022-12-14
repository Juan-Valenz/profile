import type { NextApiRequest, NextApiResponse } from 'next'
import { IRepo, repository } from '../../types/github'

const gitHubUsername = 'Juan-Valenz'
const GitHubReposUrl = `https://api.github.com/users/${gitHubUsername}/repos`

type Data = {
    repos: repository[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const repos: IRepo[] = await fetch(GitHubReposUrl).then(x => x.json())
    const repositories: repository[] = [];

    repos.forEach(r => {
        repositories.push({
            name: r.name
        })
    });

    res.status(200).json({ repos: repositories })
    res.end()
}

// const get_languages = async (url?: string): Promise<coding_language[] | undefined> => {
//     const languages = url ? await fetch(url).then(d => d.json()) : null
//     const coding_languages: coding_language[] = [];
//     for (var key in languages) {
//         coding_languages.push({
//             language: key,
//             amount: languages[key]
//         })
//     }
//     return coding_languages;
// }

export default handler