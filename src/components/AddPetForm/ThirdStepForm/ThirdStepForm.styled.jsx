import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'styles';
import { visualyHidden } from 'utils/visualyHidden';

// ------- form

export const ThirdStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const ThirdStepFormTitleContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 24px;
    margin-bottom: 17px;
  }
`;

export const ThirdStepFormTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${theme.colors.black};
  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 26.5px;
  }
`;

// ------- photo

export const ThirdStepFormPhotoTitle = styled.label`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 8px;
    font-size: 20px;
  }
`;

export const ThirdStepFormPhotoDiv = styled.div`
  width: 81px;
  font-family: ${theme.fonts.main.medium};
  font-weight: 500;
  font-size: ${theme.fontSizes.s};
  line-height: normal;
  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

export const ThirdStepFormImgInput = styled(Field)`
  ${visualyHidden}
`;

export const ThirdStepFormPlus = styled.div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

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

    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const ThirdStepFormImgPreview = styled.img`
  // opacity: 0;
`;

// ------ comments

export const ThirdStepFormComments = styled.textarea`
  min-height: 92px;
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blue};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.64px;
  color: ${theme.colors.grey};
  text-overflow: ellipsis;

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
