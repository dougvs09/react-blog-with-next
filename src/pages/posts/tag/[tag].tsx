import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from '@components/Footer'
import Header from '@components/Header'
import PostsCards from '@components/PostsCards'
import { getAllPosts } from '@utils/getAllPosts'
import { getPostsPerTag } from '@utils/getPostsPerTag'
import styled from 'styled-components'

import reactIcon from '../../../../public/react.svg'

type PostType = {
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
  tag: string
}

interface AllPostsTypes {
  postsData: PostType[]
}

const PostTag: NextPage<AllPostsTypes> = ({ postsData }: AllPostsTypes) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const tag = postsData.map((data) => data.tag)
  const title = tag[0].charAt(0).toUpperCase() + tag[0].substring(1)

  return (
    <>
      <Head>
        <title>React Blog - {title} posts</title>
        <link rel="shortcut icon" href="/react.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="React Blog é onde você encontra tudo sobre o mundo da programação"
        />
        <meta
          property="og:title"
          content="React Blog - {title} posts"
          key="ogtitle"
        />
        <meta
          property="og:url"
          content={`https://react-blog-with-next.vercel.app${router.asPath}`}
          key="ogurl"
        />
        <meta property="og:image" content={reactIcon} key="ogimage" />
        <meta property="og:site_name" content="React Blog" key="ogsitename" />
      </Head>
      <Header />
      <Main>
        <PostsWrapper>
          {postsData.map((data: PostType) => (
            <PostsCards
              key={data.id}
              path={data.id}
              postPicture={data.image.url}
              postPictureAlt={data.image.alt}
              category={data.category}
              title={data.title}
              createdAt={data.created}
              isHighlighted={data.ishighlighted}
            />
          ))}
        </PostsWrapper>
      </Main>
      <Footer />
    </>
  )
}

export default PostTag

export const getStaticPaths: GetStaticPaths = async () => {
  const postsData = await getAllPosts()
  const paths = postsData.map((data: PostType) => ({
    params: { tag: data.tag },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postsData = await getPostsPerTag(params?.tag)

  return {
    props: {
      postsData,
    },
    revalidate: 60,
  }
}

// STYLES
const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const PostsWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  margin: 0 auto;
`
