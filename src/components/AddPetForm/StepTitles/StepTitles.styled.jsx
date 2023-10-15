import styled from 'styled-components';
import { theme } from 'styles';

// --------  StepTitles

export const StepTitlesContainer = styled.ul`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const StepTitlesItems = styled.li`
  display: inline-block;
  min-width: 80px;
  margin-right: 12px;

  font-size: 10px;
  line-height: 2.5px;
  list-style: none;
  text-align: start;
  color: ${theme.colors.grey};

  &:last-child {
    margin-right: 0px;
  }

  &.current {
    color: ${theme.colors.blue};
  }

  &.previous {
    color: ${theme.colors.green};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 120px;

    font-size: 16px;
    font-weight: 500;
    line-height: 0.6;
  }
`;

export const StepTitlesLine = styled.div`
  margin-top: 12px;
  background-color: ${theme.colors.blueLight};
  border-radius: 8px;
  width: 80px;
  height: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 120px;
  }

  &.current {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.blue};
  }
  &.previous {
    background-color: ${theme.colors.green};
    color: ${theme.colors.green};
  }
`;
