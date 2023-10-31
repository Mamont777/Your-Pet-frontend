import styled from 'styled-components';
import { theme } from 'styles';

const Text = styled.p`
  padding-top: 20px;

  font-family: ${theme.fonts.main.semiBold};
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.yellow};
  text-align: center;

  opacity: 0.3;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: ${theme.fontSizes.xxl};
  }
`;

export { Text };
