import { Stars } from '@styled-icons/material'
import styled from 'styled-components'

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 370px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);

  transition: 0.4s;

  &:hover {
    transform: translateY(-10px);
  }
`

export const PostPicture = styled.div`
  height: 220px;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  position: relative;

  cursor: pointer;

  @media (max-width: 390px) {
    height: 200px;
  }

  @media (max-width: 340px) {
    height: 180px;
  }
`

export const PostInformations = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 10px 20px 20px 20px;
  align-self: start;
  width: 100%;

  border-radius: 0 0 10px 10px;

  a {
    &.category {
      font: 600 14px 'Poppins', sans-serif;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.babyBlue};
    }

    &.title_and_data {
      h2 {
        font: 600 18px 'Poppins', sans-serif;
        color: ${({ theme }) => theme.colors.gray};
        padding: 10px 0 30px 0;
      }

      span {
        font: 600 14px 'Source Sans Pro', sans-serif;
        color: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  @media (max-width: 340px) {
    padding-top: 0;
  }
`

export const Highlight = styled.div`
  position: absolute;
  top: 20px;
  right: 15px;
`

export const StarIcon = styled(Stars)`
  width: 30px;
  height: 28px;
  color: #fff;
`
