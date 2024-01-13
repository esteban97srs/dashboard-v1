import { NextApiRequest, NextApiResponse } from 'next';
import salesData from './data/salesArray.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(salesData);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}