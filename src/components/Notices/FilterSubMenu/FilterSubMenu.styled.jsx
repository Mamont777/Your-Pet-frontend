import styled from 'styled-components/macro';
import { theme } from 'styles';

const Menu = styled.div`
  padding-right: 22px;

  background-color: ${theme.colors.blueLight};
  border-radius: 20px;
`;

const MenuBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 4px 0 4px 8px;

  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.blue};
  background-color: transparent;
  border: none;
  border-radius: 20px;

  & svg {
    stroke: ${theme.colors.blue};
  }
`;

const AgesSubMenu = styled.form.withConfig({
  shouldForwardProp: prop => prop !== 'isAgeMenuOpen',
})`
  height: ${({ isAgeMenuOpen }) => (isAgeMenuOpen ? '104px' : 0)};
  padding-top: ${({ isAgeMenuOpen }) => (isAgeMenuOpen ? '4px' : 0)};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 38px;
  overflow: hidden;
  transition: height 0.3s ${theme.transition.main};
`;

const GenderSubMenu = styled(AgesSubMenu).withConfig({
  shouldForwardProp: prop => prop !== 'isGenderMenuOpen',
})`
  height: ${({ isGenderMenuOpen }) => (isGenderMenuOpen ? '75px' : 0)};
`;

const ItemText = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 24px;
  padding-left: 36px;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.colors.blue};
`;

const ItemCheckBox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const CheckedIcon = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'isAgeMenuOpen' && prop !== 'isGenderMenuOpen',
})`
  position: absolute;
  left: 0;
  top: 0;

  &svg {
    stroke: ${theme.colors.green};
  }
`;

const Icon = styled.div.withConfig({
  shouldForwardProp: prop =>
    prop !== 'isAgeMenuOpen' && prop !== 'isGenderMenuOpen',
})`
  position: absolute;
  left: 0;
  top: 0;

  & svg {
    stroke: ${theme.colors.blue};
  }
`;

export {
  Menu,
  MenuBtn,
  AgesSubMenu,
  ItemText,
  ItemCheckBox,
  CheckedIcon,
  Icon,
  GenderSubMenu,
};
