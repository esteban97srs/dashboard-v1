import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  name: string,
  image?: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user: User = { name: 'Esteban Ruiz Saldivia', image: 'https://www.diamondartclub.com/cdn/shop/products/rick-and-morty-diamond-art-painting-33240468914369_grande.jpg?v=1667779267'};
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}