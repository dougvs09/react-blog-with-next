import {
  LightMode,
  Menu,
  Close,
  DarkMode,
  Logout,
  Login,
} from '@styled-icons/material'
import { shade } from 'polished'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 15px 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid
    ${({ theme }) => (theme.title === 'dark' ? '#2c2c2c' : '#e3e3e3')};
`

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MobileMenuButton = styled.button`
  display: none;
  padding: 0 10px;
  background: transparent;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

export const LogoMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    a {
      display: flex;
      align-items: center;
      gap: 5px;

      p {
        font: 600 18px 'Poppins', sans-serif;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};

        ::before {
          content: '';
          display: inline-block;
          width: 1px;
          height: 15px;
          margin-right: 5px;
          background-color: ${({ theme }) => theme.colors.gray};
        }
        cursor: pointer;
      }
    }
  }
`

export const MobileCloseButton = styled.button`
  display: none;

  &.menuOpen {
    display: block;
    position: absolute;
    z-index: 1001;
    top: 20px;
    left: 240px;

    padding: 3px;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.gray};

    cursor: pointer;
    background: transparent;
  }
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      &:nth-child(2),
      &:nth-child(3) {
        padding-bottom: 8px;
      }

      a {
        font: 500 16px 'Source Sans Pro', sans-serif;
        color: ${({ theme }) => theme.colors.gray};
        cursor: pointer;

        &.logo {
          display: flex;
          align-items: center;
          gap: 5px;

          p {
            font: 600 22px 'Poppins', sans-serif;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.primary};

            ::before {
              content: '';
              display: inline-block;
              width: 1px;
              height: 15px;
              margin-right: 5px;
              background-color: ${({ theme }) => theme.colors.gray};
            }
            cursor: pointer;
          }
        }

        &.link_hover {
          &:after {
            content: '';
            display: block;
            height: 2px;
            width: 0;
            background-color: ${({ theme }) => theme.colors.gray};

            transition: 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;

    &.menuOpen {
      display: block;

      ul {
        align-items: start;
        flex-direction: column;
        gap: 5px;

        width: 300px;
        height: 300px;

        border-radius: 0 0 10px 0;

        padding: 20px 10px;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        background-color: ${({ theme }) => theme.colors.background};

        li {
          padding-left: 10px;

          &:first-child {
            display: none;
          }

          a {
            font: 500 20px 'Source Sans Pro', sans-serif;
          }
        }
      }
    }
  }
`

export const NavigationRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;

    &.menuOpen {
      display: flex;
      gap: 20px;
      position: absolute;
      top: 200px;
      z-index: 1001;
    }
  }
`

export const UserAvatar = styled.div`
  img {
    border-radius: 50%;
  }
`

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px 20px;
  font: 600 14px 'Poppins', sans-serif;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #111;

  cursor: pointer;

  transition: 0.4s ease-in-out;

  &:hover {
    background: ${shade(0.1, '#00D8FF')};
  }
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 5px 20px;
  font: 600 14px 'Poppins', sans-serif;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: #111;

  cursor: pointer;

  transition: 0.4s ease-in-out;

  &:hover {
    background: ${shade(0.1, '#00D8FF')};
  }
`

export const SwitchThemeButton = styled.button`
  padding: 10px;
  background: ${({ theme }) =>
    theme.title === 'dark' ? '#080808' : '#F3F3F3'};
  border-radius: 50%;
  cursor: pointer;
`

export const DarkModeIcon = styled(DarkMode)`
  width: 20px;
  height: 20px;
  color: #333333;
`
export const LightModeIcon = styled(LightMode)`
  width: 20px;
  height: 20px;
  color: #b2b2b2;
`

export const MenuIcon = styled(Menu)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.gray};
`

export const CloseIcon = styled(Close)`
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.colors.gray};
`

export const LogoutIcon = styled(Logout)`
  width: 20px;
  height: 20px;
  color: #111;
`

export const LoginIcon = styled(Login)`
  width: 20px;
  height: 20px;
  color: #111;
`
