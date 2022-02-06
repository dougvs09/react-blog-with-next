import { Linkedin, Github } from '@styled-icons/boxicons-logos'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 71px 0;
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.secondary};
`

export const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  gap: 20px;

  span {
    font: 500 16px 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.background};
  }
`

export const Medias = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const LinkedinIcon = styled(Linkedin)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.background};
`

export const GithubIcon = styled(Github)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.colors.background};
`
