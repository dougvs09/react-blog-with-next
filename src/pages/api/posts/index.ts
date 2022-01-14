import type { NextApiRequest, NextApiResponse } from 'next'

import connect from '@services/mongodb'

type PostTypes = {
  content: string
  title: string
  author: {
    id: string
    name: string
    avatar: string
  }
  image: string
  category: string
  createdAt: string
  isHighlighted: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostTypes | unknown>
) {
  if (req.method === 'POST') {
    const {
      content,
      category,
      image,
      title,
      author: { id, name, avatar },
    } = req.body

    if (!content || !category || !image || !title || !name || !id) {
      res.status(400).json({ error: 'Missing data' })
      return
    }

    const currentDate = new Date()

    const { db } = await connect()

    const data = {
      content,
      title,
      author: {
        id,
        name,
        avatar,
      },
      image,
      category,
      createdAt: currentDate,
      isHighlighted: false,
    }

    await db.collection('posts').insertOne(data)

    res.status(201).json(data)
  } else {
    res.status(404).json({ error: 'Request method not accepted' })
  }
}
