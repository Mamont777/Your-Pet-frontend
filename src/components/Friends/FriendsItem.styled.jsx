import { styled } from 'styled-components';
import { theme } from 'styles';

const Item = styled.li`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 395px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    margin: 0 auto 20px auto;
  }

  border-radius: 40px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  transition: all ${theme.transition.main};

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.a`
  display: block;
  text-align: center;

  font-size: 20px;
  font-family: Manrope;
  font-weight: 700;
  line-height: normal;
  color: #54adff;
  cursor: pointer;
  transition: all ${theme.transition.main};

  &:hover,
  :focus {
    color: #ffc107;
    transform: scale(1.1);
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 20px;
  align-items: flex-start;
`;

const FriendsInfoList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 12px;
`;

const FriendsInfoWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: color 350ms ${theme.transition.main};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${theme.colors.blue};
  }
`;

const WorkTime = styled.p`
  font: inherit;
  font-weight: 500;
  font-size: ${theme.fontSizes.xs};
  line-height: 1.34;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: inherit;

  :focus {
    color: ${theme.colors.blue};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.36;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.38;
  }
`;

const ImageWrapper = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 104px;
    display: flex;
  }
  min-width: 40%;
`;

const InfoTitle = styled.p`
  font-family: Manrope;
  font-weight: 600;
  line-height: 1.34;
  transition: all ${theme.transition.main};

  &:hover {
    color: #00c3ad;
  }

  &:focus {
    color: #00c3ad;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const InfoText = styled.p`
  line-height: 1.34;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.38;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const InfoLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: ${theme.fontSizes.xs};
  line-height: 1.34;
  color: inherit;

  :hover,
  :focus {
    color: ${theme.colors.blue};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.36;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.38;
  }
`;

const WorkTimeList = styled.ul`
  padding: 12px;
  position: absolute;
  top: 36;
  left: 0;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background: #fff;
  border: 1px solid ${theme.colors.blue};
  box-shadow: ${theme.boxShadows.main};
  border-radius: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 40px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 48px;
  }
`;

const WorkTimeItem = styled.li`
  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const WorkTimeItemCurrent = styled.li`
  color: ${theme.colors.blue};
  font-weight: 600;

  :not(:last-child) {
    margin-bottom: 4px;
  }
`;

const WorkTimeText = styled.p`
  display: flex;
  justify-content: space-between;

  font: inherit;
  font-size: ${theme.fontSizes.xs};
  font-weight: inherit;
  line-height: 1.34;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    line-height: 1.36;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    line-height: 1.38;
  }
`;

export {
  Item,
  Title,
  ItemWrapper,
  FriendsInfoList,
  FriendsInfoWrapper,
  ImageWrapper,
  InfoTitle,
  InfoText,
  InfoLink,
  WorkTimeList,
  WorkTimeItem,
  WorkTimeItemCurrent,
  WorkTimeText,
  WorkTime,
};
