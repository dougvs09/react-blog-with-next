import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import PostsCards from '../components/PostsCards'
import { Main, PostsWrapper } from '../styles/HomeStyle'
import getAllPosts from '../utils/getAllPosts'

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

const Home: NextPage<AllPostsTypes> = ({ allPostsData }: AllPostsTypes) => {
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
              {allPostsData.map((data: PostType) => (
                <PostsCards
                  key={data._id}
                  path={data._id}
                  postPicture={data.image}
                  category={data.category}
                  title={data.title}
                  createdAt={data.createdAt}
                  isHighlighted={data.isHighlighted}
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
  const allPostsData = await getAllPosts()

  return {
    props: {
      allPostsData,
    },
    revalidate: 10,
  }
}
