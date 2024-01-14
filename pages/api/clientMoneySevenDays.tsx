import { NextApiRequest, NextApiResponse } from 'next';
import clientMoneySevenDays from './data/clientMoneySevenDays.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(clientMoneySevenDays);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}