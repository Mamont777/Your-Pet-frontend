import styled from 'styled-components';
import { theme } from 'styles';

export const ContainerScroll = styled.button`
  position: fixed;
  right: 10px;
  background: ${theme.colors.grBlue2};
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);

  &:hover {
    box-shadow: 0 0 5px ${theme.colors.black}, 0 0 10px rgba(0, 0, 0, 0.5);
  }

  svg {
    stroke: ${theme.colors.white};
  }
  svg:hover {
    stroke: ${theme.colors.white};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: 30px;
    height: 30px;
    right: 20px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 50px;
    height: 50px;
    right: 260px;
    bottom: 10px;
  }
`;
