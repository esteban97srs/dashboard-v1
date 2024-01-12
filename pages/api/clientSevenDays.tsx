import { NextApiRequest, NextApiResponse } from 'next';
import clientSevenDays from './data/clientSevenDays.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(clientSevenDays);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}