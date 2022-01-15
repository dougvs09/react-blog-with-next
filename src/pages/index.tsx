import type { GetStaticProps, NextPage } from 'next'

import Footer from '@components/Footer'
import Header from '@components/Header'
import PostsCards from '@components/PostsCards'
import { getAllPosts } from '@utils/getAllPosts'
import styled from 'styled-components'

type PostType = {
  id: string
  content: string
  title: string
  image: {
    url: string
    alt: string
  }
  tag: string
  category: string
  created: string
  ishighlighted: boolean
}

interface AllPostsTypes {
  postsData: PostType[]
}

const Home: NextPage<AllPostsTypes> = ({ postsData }: AllPostsTypes) => {
  return (
    <>
      <Header />
      <Main>
        <Separator>
          <p>Posts em destaque</p>
        </Separator>
        <PostsWrapper>
          {postsData
            .filter((data: PostType) => data.ishighlighted === true)
            .map((data: PostType) => (
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
        <Separator>
          <p>Outros posts</p>
        </Separator>
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

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const postsData = await getAllPosts()

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

const Separator = styled.div`
  padding: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:after,
  &:before {
    content: '';
    width: 31%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray};
    display: block;
  }

  p {
    font: 600 14px 'Source Sans Pro', sans-serif;
    color: ${({ theme }) => theme.colors.gray};
    max-width: 115px;
  }

  @media (max-width: 440px) {
    &:after,
    &:before {
      width: 20%;
    }
  }
`
