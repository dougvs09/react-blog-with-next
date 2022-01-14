import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Footer from '@components/Footer'
import Header from '@components/Header'
import PostsCards from '@components/PostsCards'
import { getAllPosts } from '@utils/getAllPosts'
import { getPostsPerTag } from '@utils/getPostsPerTag'
import styled from 'styled-components'

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
  return (
    <>
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
