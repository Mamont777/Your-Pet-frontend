import { Field } from 'formik';
import styled from 'styled-components';
import { theme } from 'styles';
import { visualyHidden } from 'utils/visualyHidden';

//  ------- sex

export const ThirdStepSexPhotoDiv = styled.div`
  // display: flex;
  // gap: 16px;
  // font-size: 16px;
  // line-height: 1.5; /* 24px */
  // letter-spacing: 0.64px;

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   flex-direction: column;
  //   // height: 182px;
  //   // margin-bottom: 16px;
  // }
`;

// ------- form

export const ThirdStepFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
export const ThirdStepFormTitle = styled.label`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;

  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 20px;

  // color: ${theme.colors.black};

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   font-size: 28px;
  // }
`;

// ------- photo

export const ThirdStepFormPhotoTitle = styled.label`
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
    line-height: 1.3;
  }
`;
export const ThirdStepFormPhotoDiv = styled.div`
  color: ${theme.colors.black}; // #111111
  font-family: ${theme.fonts.main.medium}; // Manrope 500
  font-weight: 500;
  font-size: ${theme.fontSizes.s}; //14px;
  font-style: normal;
  line-height: normal;
  width: 81px;

  // margin-top: 34px; // 50px
  // margin-bottom: 64px;

  // @media screen and (min-width: ${theme.breakpoints.tablet}) {
  //   font-size: 28px;
  // }
`;

export const ThirdStepFormImgInput = styled(Field)`
  ${visualyHidden}
`;

export const ThirdStepFormPlus = styled.div`
  cursor: pointer;
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
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 182px;
    height: 182px;
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

  &:hover,
  &focus,
  &:active {
    border: 1px solid ${theme.colors.blue};
    outline: 1px solid ${theme.colors.blue};
  }

  // @media (min-width: 768px) {
  //   flex-direction: row-reverse;
  // }
`;
