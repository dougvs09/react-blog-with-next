import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const PostsWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px;
  margin: 0 auto;
`

export const Separator = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 20px 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  &:after,
  &:before {
    content: '';
    width: 43.4%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray};
    display: block;
  }

  p {
    font: 600 14px 'Source Sans Pro', sans-serif;
    color: ${({ theme }) => theme.colors.gray};
  }
`
