import connect from './mongodb'

type PostType = {
  _id: string
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

interface AllPostsTypes {
  allPostsData: PostType[]
}

const getAllPosts = async () => {
  const { db } = await connect()

  const result = await db.collection('posts').find({}).toArray()
  const stringifyResult = JSON.stringify(result)
  const allPostsData = JSON.parse(stringifyResult)

  return allPostsData
}

export default getAllPosts
