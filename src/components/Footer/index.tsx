import {
  FooterContainer,
  GithubIcon,
  Medias,
  LinkedinIcon,
  Wrapper,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Medias>
          <li>
            <a href="https://www.linkedin.com/in/douglasvalente09/">
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/dougvs09">
              <GithubIcon />
            </a>
          </li>
        </Medias>
        <span>Frontend Blog Blog&copy; Todos os direitos reservados</span>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
