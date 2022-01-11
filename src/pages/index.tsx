import type { GetStaticProps, NextPage } from 'next'

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
  return (
    <>
      <Header />
      <Main>
        <PostsWrapper>
          {allPostsData.map((data) => (
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
        </PostsWrapper>
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getAllPosts()

  return {
    props: {
      allPostsData,
    },
    revalidate: 10,
  }
}

export default Home
