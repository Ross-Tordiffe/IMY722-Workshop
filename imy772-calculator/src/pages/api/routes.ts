// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectMongo, closeClient, fetchCollection } from '../../utils/database'

type Data = {
    history: Array<{problem: string, answer: string}>,
    message: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  if(req.method === 'POST') {
    const { problem, operator, answer } = req.body;
    const database = await connectMongo();
    const connection = await fetchCollection('history');
    await connection.insertOne({ problem: problem, answer: answer });
    return res.status(200).json({ history: [{ problem: problem, answer: answer }], message: 'History saved' });
  } else if (req.method === 'GET') {
    const database = await connectMongo();
    const connection = await fetchCollection('history');
    const history = await connection.find({}).toArray();
    return res.status(200).json({ history: history, message: 'History fetched' });
    
  } else {
    console.log('Invalid request');
    return res.status(405).json({ history: [], message: 'Invalid request' });
  }
}
