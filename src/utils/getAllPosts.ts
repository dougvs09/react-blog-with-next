import axios, { AxiosResponse } from 'axios'

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

const getAllPosts = async (): Promise<AxiosResponse<AllPostsTypes>> => {
  const response = await axios.get(`http://localhost:3000/api/posts`)
  const data = response.data

  return data
}

export default getAllPosts
