import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

import {
  ArticleContainer,
  Highlight,
  PostInformations,
  PostPicture,
  StarIcon,
} from './styles'

type PostCardType = {
  path: string
  postPicture: string
  category: string
  title: string
  createdAt: string
  isHighlighted: boolean
}

const PostsCards: React.FC<PostCardType> = ({
  path,
  postPicture,
  category,
  title,
  createdAt,
  isHighlighted,
}: PostCardType) => {
  useEffect(() => {
    tippy('[data-tippy-content]')
  }, [])

  return (
    <ArticleContainer>
      <PostPicture>
        <Link href={`http://localhost:3000/posts/${path}`}>
          <a></a>
        </Link>
        <Image src={postPicture} width={370} height={220} />
        <Highlight data-tippy-content="Em destque">
          {isHighlighted && (
            <Link href={`http://localhost:3000/posts/${path}`}>
              <a>
                <StarIcon />
              </a>
            </Link>
          )}
        </Highlight>
      </PostPicture>
      <PostInformations>
        <Link href={`http://localhost:3000/posts/${path}`}>
          <a className="category">{category}</a>
        </Link>
        <Link href={`http://localhost:3000/posts/${path}`}>
          <a className="title_and_data">
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <span>{createdAt}</span>
            </div>
          </a>
        </Link>
      </PostInformations>
    </ArticleContainer>
  )
}

export default PostsCards
