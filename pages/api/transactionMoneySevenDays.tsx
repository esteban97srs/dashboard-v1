import { NextApiRequest, NextApiResponse } from 'next';
import transactionsMoneySevenDays from './data/transactionsMoneySevenDays.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(transactionsMoneySevenDays);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}