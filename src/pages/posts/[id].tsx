/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'

import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Header from '../../components/Header'
import {
  Banner,
  Container,
  PostContent,
  PostInfo,
  PostWrapper,
} from '../../styles/PostStyle'
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
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Header />
          <main>
            <Banner>
              <Image
                src={postData.image.url}
                alt={postData.image.alt}
                width={2000}
                height={500}
                loading="lazy"
              />
            </Banner>
            <PostWrapper>
              <h2>{postData.title}</h2>
              <PostInfo>
                <span>{postData.category}</span>
                <span>{postData.created}</span>
              </PostInfo>
              <PostContent>
                <ReactMarkdown children={postData.content} />
              </PostContent>
            </PostWrapper>
          </main>
        </Container>
      )}
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
