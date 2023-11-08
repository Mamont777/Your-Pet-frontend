import styled from 'styled-components';
import { theme } from 'styles';

const AdTitle = styled.h2`
  text-align: center;
  font-family: ${theme.fonts.main.bold};
  margin-top: 40px;
  font-size: ${theme.fontSizes.xl};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 60px;
    font-size: ${theme.fontSizes.xxxl};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.xxl};
  }
`;

const AdList = styled.ul.withConfig({
  shouldForwardProp: prop => prop !== 'visibleSlides',
})`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 30px;
  }
`;

const AdItem = styled.li`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  gap: 12px;

  background-color: ${theme.colors.white};
  border-radius: 0px 0px 40px 40px;
  transition: all 300ms ${theme.transition.main};

  :hover,
  :focus {
    box-shadow: ${theme.boxShadows.secondary};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 224px;
    margin-bottom: 22px;
  }
`;

const AdImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const AdText = styled.p`
  text-align: center;
  padding: 10px;
  font-family: Inter-Regular;
  font-size: ${theme.fontSizes.l};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.m};
  }
`;

export { AdTitle, AdList, AdItem, AdImage, AdText };
