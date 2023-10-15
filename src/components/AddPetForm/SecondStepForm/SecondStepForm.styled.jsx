import styled from 'styled-components';
import { theme } from 'styles';
import { Field } from 'formik';

//  --------- AddPetForm

export const SecondStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

export const InputWraper = styled.div`
  position: relative;
`;

export const SecondStepFormTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;

  color: ${theme.colors.black};
  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;

  &:nth-last-child(-n + 1) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l};
  }
`;

export const SecondStepFormInput = styled(Field)`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid;

  font-family: Manrope;
  font-size: 14px;
  ont-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.56px;
  color: ${theme.colors.grey};

  &:hover,
  &focus,
  &:active {
    border: 1px solid;
    outline: 1px solid ${theme.colors.blue};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;
