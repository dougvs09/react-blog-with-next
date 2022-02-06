import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Footer from '@components/Footer'
import Header from '@components/Header'
import PostsCards from '@components/PostsCards'
import { getAllPosts } from '@utils/getAllPosts'
import styled from 'styled-components'

import reactIcon from '../../public/react.svg'

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
      <Head>
        <title>Frontend Blog - O Blog sobre programção</title>
        <link rel="shortcut icon" href="/react.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="React Blog é onde você encontra tudo sobre o mundo da programação"
        />
        <meta
          property="og:title"
          content="React Blog - O Blog sobre programção"
          key="ogtitle"
        />
        <meta
          property="og:url"
          content="https://react-blog-with-next.vercel.app"
          key="ogurl"
        />
        <meta property="og:image" content={reactIcon} key="ogimage" />
        <meta property="og:site_name" content="React Blog" key="ogsitename" />
      </Head>
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
