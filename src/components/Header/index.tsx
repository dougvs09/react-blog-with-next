import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import reactIcon from '../../../public/react.svg'
import useTheme from '../../hooks/useTheme'
import {
  HeaderContainer,
  Wrapper,
  Navigation,
  MobileMenuButton,
  MobileCloseButton,
  LogoMobile,
  SwitchThemeButton,
  MenuIcon,
  LightModeIcon,
  DarkModeIcon,
  CloseIcon,
} from './styles'

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [menu, setMenu] = useState(false)

  const handleOpenMenu = () => {
    setMenu(true)
  }

  const handleCloseMenu = () => {
    setMenu(false)
  }

  return (
    <HeaderContainer>
      <Wrapper>
        <MobileMenuButton type="button" onClick={handleOpenMenu}>
          <MenuIcon />
        </MobileMenuButton>
        <LogoMobile>
          <Link href="/">
            <a className="logo_mobile">
              <Image
                src={reactIcon}
                alt="blog icon"
                width="35px"
                height="30px"
              />
              <p>Blog</p>
            </a>
          </Link>
        </LogoMobile>
        <Navigation className={menu ? 'menuOpen' : ''}>
          <MobileCloseButton
            className={menu ? 'menuOpen' : ''}
            onClick={handleCloseMenu}
          >
            <CloseIcon />
          </MobileCloseButton>
          <ul>
            <li>
              <Link href="/">
                <a className="logo">
                  <Image
                    src={reactIcon}
                    alt="blog icon"
                    width="35px"
                    height="30px"
                  />
                  <p>Blog</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link_hover">Front-end</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="link_hover">Back-end</a>
              </Link>
            </li>
          </ul>
        </Navigation>
        <SwitchThemeButton type="button" onClick={toggleTheme}>
          {theme.title === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </SwitchThemeButton>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
