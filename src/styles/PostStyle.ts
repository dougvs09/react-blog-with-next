import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  width: 100%;
  height: 400px;
`

export const PostWrapper = styled.div`
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
export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  span {
    font: 600 16px 'Source Sans Pro', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
`

export const PostContent = styled.div`
  margin-top: 40px;
  font: 400 20px/32px 'Source Sans Pro', sans-serif;
  align-self: center;

  color: ${({ theme }) => theme.colors.gray};

  p {
    padding-bottom: 40px;
  }
`

export const AuthorInfo = styled.div`
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
