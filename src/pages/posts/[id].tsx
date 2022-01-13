import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { getAllPosts } from '../../utils/getAllPosts'
import { getPost } from '../../utils/getPost'

type PostDataType = {
  id: string
  content: string
  title: string
  image: {
    url: string
    alt: string
  }
  category: string
  created: string
  ishighlighted: boolean
}

interface PostType {
  postData: PostDataType
}

const Post: NextPage<PostType> = ({ postData }: PostType) => {
  const router = useRouter()

  return (
    <div>
      {router.isFallback ? <div>Loading...</div> : <h1>{postData.title}</h1>}
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const postsData = await getAllPosts()
  const paths = postsData.map((data: PostDataType) => ({
    params: { id: data.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPost(params?.id)

  return {
    props: {
      postData,
    },
    revalidate: 10,
  }
}
