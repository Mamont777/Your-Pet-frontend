import { styled } from 'styled-components';
import { theme } from 'styles';

export const RegisterContainer = styled.main`
  margin: 0 auto;
  padding: 40px 20px 34px 20px;
  width: 320px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 768px;
    padding: 80px 80px 159px 80px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1280px;
    padding: 80px 16px 75px 16px;
  }
`;
