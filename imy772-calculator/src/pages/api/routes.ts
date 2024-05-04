// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if(req.method === 'POST') {
    console.log('POST request')
  } else if (req.method === 'GET') {
    console.log('GET request')
  } else {
    console.log('Invalid request')
  }
  res.status(200).json({ message: 'Api returned something' })
}
