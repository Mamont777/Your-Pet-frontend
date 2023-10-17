import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'styles';
import { visualyHidden } from 'utils/visualyHidden';

//  ------- sex
export const ThirdStepSexDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.64px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ThirdStepSexPhotoDiv = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
export const ThirdStepSexContainer = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 48px;
  }
`;
export const ThirdStepSexTitle = styled.h3`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  margin-bottom: 3px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.l};
    margin-bottom: 9px;
  }
`;
export const ThirdStepSexInput = styled.input`
  display: none;
`;

export const ThirdStepSexLabel = styled.label.withConfig({
  shouldForwardProp: prop => prop !== 'active',
})`
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 40px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
    ${({ active }) =>
      active
        ? 'border-radius: 40px; background-color: #54adff; color: #fef9f9; svg {stroke: #FFFFFF;}'
        : ''};

    ${({ value }) => (value === 'female' ? 'svg {stroke: #F43F5E;}' : '')};
    ${({ value }) => (value === 'male' ? 'svg {stroke: #54ADFF;}' : '')};

    ${({ active }) =>
      active
        ? 'font-size: 14px; letter-spacing: 0.56px; border-radius: 40px; background-color: #54adff; color: #fef9f9; svg {stroke: #FFFFFF;}'
        : ''};
  }
`;

export const ThirdStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 45px;
  }
`;
export const ThirdStepFormTitleContainer = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 24px;
  }
`;

export const ThirdStepFormContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 395px;
    margin-bottom: 60px;
  }
`;

export const ThirdStepFormTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;

  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  color: ${theme.colors.black};

  &:nth-last-child(-n + 1) {
    margin-bottom: 0px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.325;
    gap: 8px;
  }
`;
export const ThirdStepFormInput = styled.input`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 8px 16px;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;
  color: ${theme.colors.grey};

  border-radius: 40px;
  border: 1px solid ${theme.colors.blue};

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }
`;

// ------- photo

export const ThirdStepFormPhotoTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    ${({ data }) =>
      data.category !== 'pet'
        ? 'gap: 8px; flex-direction: column;align-items: flex-start;'
        : ''};
  }
`;

export const ThirdStepFormPhotoDiv = styled.div`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  width: 81px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.4;
    width: 200px;
  }
`;
export const ThirdStepFormImgInput = styled(Field)`
  ${visualyHidden}
`;
export const ThirdStepFormPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;

  background-color: ${theme.colors.blueLight};
  border-radius: 20px;
  color: ${theme.colors.blue};

  cursor: pointer;
  overflow: hidden;
  object-position: center;
  object-fit: cover;

  & svg {
    stroke: currentColor;
    width: 30px;
    height: 30px;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 182px;
    height: 182px;
    & svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const ThirdStepFormImgPreview = styled.img`
  width: 100%;
  height: 100%;
`;
// ------ comments

export const ThirdStepFormComments = styled.textarea`
  min-height: 92px;
  padding: 8px 16px;

  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;
  color: ${theme.colors.grey};
  text-overflow: ellipsis;

  border-radius: 20px;
  border: 1px solid ${theme.colors.blue};

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;

    ${({ data, step }) =>
      data.category !== 'pet' && data.category !== 'sell' && step === 3
        ? 'min-height: 182px;'
        : 'min-height: 92px;'};
  }
`;
