import {
  FooterContainer,
  GithubIcon,
  Medias,
  TwitterIcon,
  Wrapper,
} from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <Medias>
          <li>
            <a href="https://twitter.com/its_easy1">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/dougvs09">
              <GithubIcon />
            </a>
          </li>
        </Medias>
        <span>React Blog&copy; Todos os direitos reservados</span>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
