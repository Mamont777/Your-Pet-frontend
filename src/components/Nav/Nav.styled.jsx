import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { NavLink } from 'react-router-dom';

export const NavMenu = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'click',
})`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 767px) {
    padding: 40px 70px 219px 70px;
    top: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 70px;
    padding: 94px 0 700px 0;
  }

  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    flex-direction: column-reverse;
    display: ${({ click }) => (click ? 'visible' : 'none')};

    text-align: center;
    transition: all ${theme.transition.main};
    background-color: ${theme.colors.bgColor};
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    height: 100%;
  }
`;

export const NavMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1279px) {
    text-align: center;

    &:not(:first-child) {
      height: 66px;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    text-align: center;

    &:not(:first-child) {
      height: 44px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavMenuItemLink = styled(NavLink)`
  color: ${theme.colors.black};
  font-size: ${theme.fontSizes.l};
  text-decoration: none;
  margin-right: 40px;
  transition: all ${theme.transition.main};
  @media screen and (max-width: 1279px) {
    margin: 0;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
  }

  &:hover,
  :focus {
    color: ${theme.colors.yellow};
  }

  &.active {
    color: ${theme.colors.yellow};
    font-family: ${theme.fonts.main.bold};
  }
`;

export const AuthContainerMobile = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    display: visible;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const UserNavContainerMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 84px;
    display: visible;
  }
`;

export const LogoutButtnMobile = styled.div`
  position: absolute;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: visible;
    top: 400px;
    left: 10%;
  }
`;
