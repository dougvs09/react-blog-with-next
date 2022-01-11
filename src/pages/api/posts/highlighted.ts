import type { NextApiRequest, NextApiResponse } from 'next'

import connect from '../../../utils/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { db } = await connect()

  if (req.method === 'GET') {
    const result = await db
      .collection('posts')
      .find({ isHighlighted: true })
      .toArray()

    res.status(200).json(result)
  } else {
    res.status(400).json({ error: 'Request method not accepted' })
  }
}
