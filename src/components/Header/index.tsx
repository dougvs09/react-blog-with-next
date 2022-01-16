import { useEffect, useState } from 'react'

import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

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
  NavigationRight,
  LoginButton,
  UserAvatar,
  LogoutIcon,
  LogoutButton,
  LoginIcon,
} from './styles'

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme()
  const [menu, setMenu] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    tippy('[data-tippy-content]', {
      touch: 'hold',
    })
  }, [])

  const handleOpenMenu = () => {
    setMenu(true)
  }

  const handleCloseMenu = () => {
    setMenu(false)
  }

  return (
    <HeaderContainer>
      <Wrapper>
        <MobileMenuButton
          type="button"
          onClick={handleOpenMenu}
          data-tippy-content="Menu"
        >
          <MenuIcon />
        </MobileMenuButton>
        <LogoMobile>
          <Link href="/">
            <a className="logo_mobile">
              <Image src={reactIcon} alt="blog icon" width={35} height={30} />
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
                    width={35}
                    height={30}
                  />
                  <p>Blog</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/posts/tag/frontend">
                <a className="link_hover">Front-end</a>
              </Link>
            </li>
            <li>
              <Link href="/posts/tag/backend">
                <a className="link_hover">Back-end</a>
              </Link>
            </li>
          </ul>
        </Navigation>
        <NavigationRight className={menu ? 'menuOpen' : ''}>
          {!session ? (
            <LoginButton onClick={() => signIn('google')}>
              <LoginIcon />
              Fazer login
            </LoginButton>
          ) : (
            <>
              <LogoutButton onClick={() => signOut()}>
                <LogoutIcon />
                Logout
              </LogoutButton>
              <UserAvatar>
                <Image
                  src={session.user?.image ? session.user.image : ''}
                  alt="user avatar"
                  width={40}
                  height={40}
                />
              </UserAvatar>
            </>
          )}
          <SwitchThemeButton
            type="button"
            onClick={toggleTheme}
            data-tippy-content="Trocar tema"
          >
            {theme.title === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </SwitchThemeButton>
        </NavigationRight>
      </Wrapper>
    </HeaderContainer>
  )
}

export default Header
