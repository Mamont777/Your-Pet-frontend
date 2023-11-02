import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.bgColor};
`;

export const HeaderWrapper = styled.header`
  margin: auto;
  max-width: 1280px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    max-width: 480px;
  }

  @media screen and (max-width: 1199px) {
    max-width: 780px;
    height: 28px;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const UserNavBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 300px;
`;

export const IconOpenMenu = styled.div`
  display: none;

  @media screen and (max-width: 1279px) {
    display: flex;
  }
`;
