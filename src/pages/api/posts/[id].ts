import type { NextApiRequest, NextApiResponse } from 'next'

import { ObjectId } from 'mongodb'

import connect from '../../../services/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { id } = req.query as { id: string }

  if (!id) {
    res.status(404).json({ error: `Post with ${id} not found` })
    return
  }

  let _id: ObjectId
  try {
    _id = new ObjectId(id)
  } catch {
    res.status(404).json({ error: 'Wrong ObjectId' })
    return
  }

  const { db } = await connect()

  if (req.method === 'GET') {
    const result = await db.collection('posts').findOne({ _id })

    if (!result) {
      res.status(404).json({ error: 'Post not found' })
      return
    }

    res.status(200).json(result)
  } else {
    res.status(400).json({ error: 'Request method not accepted' })
  }
}
