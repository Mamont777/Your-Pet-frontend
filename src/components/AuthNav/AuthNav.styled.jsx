import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const Auth = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1279px) {
    margin-left: 270px;
  }
`;

export const LinkRegister = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.main.semiBold};
  width: 142px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  color: ${theme.colors.yellow};
  border: solid 2px ${theme.colors.yellow};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  transition: ${theme.transition};
  &:hover {
    transition: all ${theme.transition.main};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
  }
  &.active {
    transition: ${theme.transition.duration};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const LinkLogin = styled(NavLink)`
  width: 165px;
  height: 40px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.64px;
  font-family: ${theme.fonts.main.semiBold};
  color: ${theme.colors.yellow};
  border: solid 2px ${theme.colors.yellow};
  border-radius: 40px;
  background-color: ${theme.colors.white};
  cursor: pointer;
  transition: all ${theme.transition.main};
  svg {
    fill: ${theme.colors.yellow};
    margin-left: 8px;
  }
  &:hover {
    transition: all ${theme.transition.main};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.white};
    }
  }
  &.active {
    transition: all ${theme.transition.main};
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
    svg {
      fill: ${theme.colors.white};
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const Text = styled.p`
  text-align: center;
`;
