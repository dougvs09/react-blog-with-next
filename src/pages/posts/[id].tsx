/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'

import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {
  AuthorInfo,
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
  author: [
    {
      name: string
      description: string
      avatar: {
        url: string
        alt: string
      }
    }
  ]
}

interface PostType {
  postData: PostDataType
}

const Post: NextPage<PostType> = ({ postData }: PostType) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
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
          <AuthorInfo>
            <Image
              src={postData.author[0].avatar.url}
              alt="author avatar"
              width={100}
              height={100}
            />
            <div>
              <h3>{postData.author[0].name}</h3>
              <p>{postData.author[0].description}</p>
            </div>
          </AuthorInfo>
        </PostWrapper>
      </main>
      <Footer />
    </Container>
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
    revalidate: 60,
  }
}
