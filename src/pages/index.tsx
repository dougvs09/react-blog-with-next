import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import PostsCards from '../components/PostsCards'
import { Main, PostsWrapper } from '../styles/HomeStyle'
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
  const router = useRouter()

  return (
    <>
      <Header />
      <Main>
        <PostsWrapper>
          {router.isFallback ? (
            <div>Loading...</div>
          ) : (
            <>
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
            </>
          )}
        </PostsWrapper>
      </Main>
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
    revalidate: 10,
  }
}
