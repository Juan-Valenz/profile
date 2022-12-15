import type { NextApiRequest, NextApiResponse } from 'next'
import { coding_language } from '../../types/github'

type Data = {
    languages: coding_language[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const languages_out = await fetch(req.body.language_url).then(x => x.json())
    const languages: coding_language[] = [];
    for (const [key, entry] of Object.entries(languages_out)) {
        languages.push({
            language: key,
            amount: entry
        })
    }
    res.status(200).json({ languages: languages })
    res.end()
}

export default handler