/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown'

import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Footer from '@components/Footer'
import Header from '@components/Header'
import { Facebook, Linkedin } from '@styled-icons/boxicons-logos'
import { getAllPosts } from '@utils/getAllPosts'
import { getPost } from '@utils/getPost'
import styled from 'styled-components'

type PostDataType = {
  id: string
  content: string
  title: string
  tag: string
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
        <Medias>
          <ul>
            <li>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://react-blog-with-next.vercel.app/posts/${postData.id}`}
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://react-blog-with-next.vercel.app/posts/${postData.id}`}
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </Medias>
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

// STYLES
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Banner = styled.div`
  width: 100%;
  height: 400px;
`

const Medias = styled.div`
  position: absolute;
  top: 550px;
  right: 180px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.gray};
      padding: 3px 6px 6px 6px;

      transition: 0.4s;

      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font: 600 32px 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.gray};
    margin: 20px 0;
  }
`
const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  span {
    font: 600 16px 'Source Sans Pro', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
`

const PostContent = styled.div`
  margin-top: 40px;
  font: 400 20px/32px 'Source Sans Pro', sans-serif;
  align-self: center;

  color: ${({ theme }) => theme.colors.gray};

  p {
    padding-bottom: 40px;
  }
`

const AuthorInfo = styled.div`
  align-self: flex-start;

  display: flex;
  align-items: start;
  gap: 20px;

  margin-top: 50px;

  img {
    border-radius: 50%;
    border: 3px solid white;
  }

  > div {
    h3 {
      font: 600 20px 'Poppins', sans-serif;
      color: ${({ theme }) => theme.colors.primary};
      padding-bottom: 20px;
    }

    p {
      font: 16px 'Source Sans Pro', sans-serif;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`

const LinkedinIcon = styled(Linkedin)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.gray};

  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

const FacebookIcon = styled(Facebook)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.gray};

  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
