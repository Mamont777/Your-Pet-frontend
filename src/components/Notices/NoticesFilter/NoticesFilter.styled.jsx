import styled from 'styled-components';
import { theme } from 'styles/theme.js';

const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 17px;
  z-index: 2;
`;

const FilterBtn = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'isOpen',
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 8px;

  background-color: ${({ isOpen }) =>
    isOpen ? 'transparent' : theme.colors.blue};
  border: none;
  border-radius: 50%;

  transition: color 300ms ${theme.transition.main},
    border-color 300ms ${theme.transition.main},
    background-color 300ms ${theme.transition.main};

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    border-color: transparent;
    background-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    border-radius: 40px;
    background: ${theme.colors.grBlue2};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    z-index: -1;

    transition: opacity 300ms ${theme.transition.main};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: ${({ isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.blue};

    transition: stroke 300ms ${theme.transition.main};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${theme.colors.white};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 152px;
    gap: 8px;

    font-family: ${theme.fonts.main.bold};
    font-size: ${theme.fontSizes.m};
    color: ${({ isOpen }) => (isOpen ? theme.colors.white : theme.colors.blue)};
    background-color: transparent;
    border-width: ${({ filled }) => (filled ? 0 : '2px')};
    border-color: ${({ isOpen }) =>
      isOpen ? 'transparent' : theme.colors.blue};
    border-style: solid;
    border-radius: 40px;
  }
`;

const Filters = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'isOpen' &&
    prop !== 'isAgeMenuOpen' &&
    prop !== 'isGenderMenuOpen',
})`
  position: absolute;
  top: 40px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;
  height: ${({ isOpen, isAgeMenuOpen, isGenderMenuOpen }) =>
    isOpen ? filtersHeight(isAgeMenuOpen, isGenderMenuOpen) : '0px'};
  padding: 8px;

  background-color: ${theme.colors.white};
  border-radius: 20px;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  will-change: opacity, max-height;
  overflow: hidden;

  transition: opacity ${({ isOpen }) => (isOpen ? '200ms' : '550ms')}
      ${theme.transition.main},
    height 300ms ${theme.transition.main};
`;

const FiltersText = styled.p`
  font-family: ${theme.fonts.main.bold};
  font-size: ${theme.fontSizes.m};
  color: ${theme.colors.blue};
  text-align: left;
`;

function filtersHeight(ageFilterFlag, genderFilterFlag) {
  if (!ageFilterFlag && !genderFilterFlag) {
    return '130px';
  } else if (ageFilterFlag && !genderFilterFlag) {
    return '266px';
  } else if (!ageFilterFlag && genderFilterFlag) {
    return '237px';
  } else {
    return '338px';
  }
}

export { FilterWrapper, FilterBtn, Filters, FiltersText };
