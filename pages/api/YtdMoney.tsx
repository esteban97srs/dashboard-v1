import { NextApiRequest, NextApiResponse } from 'next';
import YtdMoney from './data/YtdMoney.json';

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json(YtdMoney);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}