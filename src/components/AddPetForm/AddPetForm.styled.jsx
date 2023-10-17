import styled, { keyframes } from 'styled-components';
import { Form } from 'formik';
import { theme } from 'styles';

//  --------- AddPetForm
export const AddPetDiv = styled.div`
  margin: 20px auto;
  border-radius: 40px;
  box-shadow: ${theme.boxShadows.main};
  background-color: ${theme.colors.white};

  font-family: ${theme.fonts.main.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.5;

  @media screen and (min-width: ${theme.breakpoints
      .mobile}) and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    ${({ data, step }) =>
      data.category !== 'pet' && step === 3
        ? 'width: 704px;'
        : 'width: 458px;'};
  }
`;

export const AddPetContainerForm = styled(Form)`
  padding: 20px 8px;
  min-height: 496px;

  @media screen and (min-width: ${theme.breakpoints
      .mobile}) and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 20px 32px;
    min-height: 542px;
  }
`;

export const AddPetFormTitle = styled.h2`
  margin-bottom: 24px;

  padding-left: 12px;
  line-height: normal;
  font-size: ${theme.fontSizes.l};
  color: ${theme.colors.black};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-left: 0px;

    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    text-align: center;
  }
`;

//  --------- AddPetBtn

export const AddPetBtnList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-end;
  }
`;

export const AddPetBtnItem = styled.li`
  list-style: none;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fonts.main.bold};
`;

export const AddPetBtnNext = styled.button`
  min-width: 248px;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 8px 28px;

  letter-spacing: 0.56px;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fonts.main.bold};
  border-radius: 40px;

  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};
  transition: all ${theme.transition.main};

  svg {
    fill: ${theme.colors.white};
  }
  &:hover {
    background-color: rgb(118, 184, 245);
    svg {
      fill: ${theme.colors.white};
    }
  }

  &:disabled {
    background-color: ${theme.colors.blueLight};
    pointer-events: none;
  }
`;

const moveArrow = keyframes`
0% {
  transform: translateX(0);
}
15% {
  transform: translateX(15%);
}
60% {
  transform: translateX(-30%);
}
100% {
  transform: translateX(0);
}
`;

export const AddPetBtnCancel = styled.button`
  padding: 0px 0px;
  border-radius: 40px;
  font-weight: ${theme.fonts.main.bold};
  font-size: ${theme.fontSizes.m};
  line-height: 22px;
  letter-spacing: 0.64px;
  color: ${theme.colors.blue};
  background-color: transparent;
  transition: all ${theme.transition.main};

  &:hover,
  &:focus {
    color: ${theme.colors.yellow};
    svg {
      stroke: ${theme.colors.yellow};
    }
  }

  &:hover svg,
  &:focus svg {
    animation: ${moveArrow} 600ms linear infinite;
  }
`;

export const AddPetBtnCancelDiv = styled.div`
  display: flex;
  gap: 12px;
`;
