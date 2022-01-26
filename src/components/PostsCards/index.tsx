import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import tippy, { animateFill } from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';

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
  isHighlighted?: boolean
  postPictureAlt: string
}

const PostsCards: React.FC<PostCardType> = ({
  path,
  postPicture,
  category,
  title,
  createdAt,
  isHighlighted,
  postPictureAlt,
}: PostCardType) => {
  useEffect(() => {
      tippy('[data-tippy-content]', {
        touch: false,
        animateFill: true,
        plugins: [ animateFill ]
      })
  }, [])

  return (
    <ArticleContainer>
      <PostPicture>
        <Link href={`/posts/${path}`}>
          <a>
            <Image
              src={postPicture}
              alt={postPictureAlt}
              width={370}
              height={220}
              blurDataURL={postPicture}
              placeholder="blur"
            />
          </a>
        </Link>
        <Highlight data-tippy-content="Em destque">
          {isHighlighted && (
            <Link href={`/posts/${path}`}>
              <a>
                <StarIcon />
              </a>
            </Link>
          )}
        </Highlight>
      </PostPicture>
      <PostInformations>
        <Link href={`/posts/${path}`}>
          <a className="category">{category}</a>
        </Link>
        <Link href={`/posts/${path}`}>
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
