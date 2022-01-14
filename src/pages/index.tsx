import type { GetStaticProps, NextPage } from 'next'

import Footer from '../components/Footer'
import Header from '../components/Header'
import PostsCards from '../components/PostsCards'
import { Main, PostsWrapper, Separator } from '../styles/HomeStyle'
import { getAllPosts } from '../utils/getAllPosts'

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
