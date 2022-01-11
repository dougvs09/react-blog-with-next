import type { NextApiRequest, NextApiResponse } from 'next'

import getDate from '../../../utils/date'
import connect from '../../../utils/mongodb'

type PostTypes = {
  content: string
  title: string
  author: {
    name: string
    id: string
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
  const {
    content,
    category,
    image,
    title,
    author: { name, id },
  } = req.body

  if (!content || !category || !image || !title || !name || !id) {
    res.status(400).json({ error: 'Missing data' })
    return
  }

  const currentDate = getDate()

  const { db } = await connect()

  if (req.method === 'POST') {
    const data = {
      content,
      title,
      author: {
        name,
        id,
      },
      image,
      category,
      createdAt: currentDate,
      isHighlighted: false,
    }

    await db.collection('posts').insertOne(data)

    res.status(200).json(data)
  } else {
    res.status(404).json({ error: 'Request method not accepted' })
  }
}
