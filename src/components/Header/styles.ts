import { LightMode, Menu, Close, DarkMode } from '@styled-icons/material'
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
        color: ${(props) => props.theme.colors.primary};

        ::before {
          content: '';
          display: inline-block;
          width: 1px;
          height: 15px;
          margin-right: 5px;
          background-color: ${(props) => props.theme.colors.gray};
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
    z-index: 1000;
    top: 15px;
    right: 15px;

    padding: 3px;
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.colors.gray};

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
      a {
        font: 500 16px 'Source Sans Pro', sans-serif;
        color: ${(props) => props.theme.colors.gray};
        cursor: pointer;

        &.logo {
          display: flex;
          align-items: center;
          gap: 5px;

          p {
            font: 600 22px 'Poppins', sans-serif;
            text-transform: uppercase;
            color: ${(props) => props.theme.colors.primary};

            ::before {
              content: '';
              display: inline-block;
              width: 1px;
              height: 15px;
              margin-right: 5px;
              background-color: ${(props) => props.theme.colors.gray};
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
            background-color: ${(props) => props.theme.colors.gray};

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

        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.background};

        li {
          padding-left: 10px;

          &:first-child {
            display: none;
          }
        }
      }
    }
  }
`

export const SwitchThemeButton = styled.button`
  padding: 10px;
  background: ${(props) =>
    props.theme.title === 'dark' ? '#080808' : '#F3F3F3'};
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
  color: ${(props) => props.theme.colors.gray};
`

export const CloseIcon = styled(Close)`
  width: 25px;
  height: 25px;
  color: ${(props) => props.theme.colors.gray};
`
