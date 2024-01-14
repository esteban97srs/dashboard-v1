import { NextApiRequest, NextApiResponse } from 'next';
import clientCashbackSevenDays from './data/clientCashbackSevenDays.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(clientCashbackSevenDays);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}