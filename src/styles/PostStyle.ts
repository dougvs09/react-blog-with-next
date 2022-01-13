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
  font: 500 20px/32px 'Poppins', sans-serif;
  align-self: center;

  color: ${({ theme }) => theme.colors.gray};

  p {
    margin-bottom: 10px;
  }
`
