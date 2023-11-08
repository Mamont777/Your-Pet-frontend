import styled from 'styled-components';
import { theme } from 'styles';

const Wrapper = styled.div`
  max-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.boxShadows.main};
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.blue};
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  & svg {
    stroke: ${theme.colors.blue};
    transition: stroke 300ms ${theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${theme.colors.yellow};
  }
`;

export { Wrapper, Text, Btn };
