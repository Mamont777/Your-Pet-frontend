import React from 'react';
import PropTypes from 'prop-types';

import {
  AgesSubMenu,
  CheckedIcon,
  GenderSubMenu,
  Icon,
  ItemCheckBox,
  ItemText,
  Menu,
  MenuBtn,
} from './FilterSubMenu.styled';

import { CheckRound, ChevronDown, ChevronUp, Round } from 'components/icons';

const ageFilterData = [
  { text: '3-12m', filter: '3m-12m' },
  { text: '1 year', filter: '1y' },
  { text: '2 years', filter: '2y' },
];

const genderFilerData = ['female', 'male'];

const FilterSubMenu = ({
  isAgeMenuOpen,
  isGenderMenuOpen,
  toggleMenu,
  setGenderFilter,
  setAgeFilter,
  age,
  gender,
}) => {
  return (
    <>
      <Menu>
        <MenuBtn type="button" id="By age" onClick={toggleMenu}>
          {!isAgeMenuOpen ? <ChevronDown /> : <ChevronUp />}
          By Age
        </MenuBtn>
        <AgesSubMenu isAgeMenuOpen={isAgeMenuOpen}>
          {ageFilterData.map(item => (
            <ItemText key={item.text}>
              <ItemCheckBox
                type="checkbox"
                checked={age === item.filter}
                onChange={() => setAgeFilter(item.filter)}
              />
              {age === item.filter && (
                <CheckedIcon isAgeMenuOpen={isAgeMenuOpen}>
                  <CheckRound />
                </CheckedIcon>
              )}
              {age !== item.filter && (
                <Icon isAgeMenuOpen={isAgeMenuOpen}>
                  <Round />
                </Icon>
              )}
              {item.text}
            </ItemText>
          ))}
        </AgesSubMenu>
      </Menu>
      <Menu>
        <MenuBtn type="button" id="By gender" onClick={toggleMenu}>
          {!isGenderMenuOpen ? <ChevronDown /> : <ChevronUp />}
          By gender
        </MenuBtn>
        <GenderSubMenu isGenderMenuOpen={isGenderMenuOpen}>
          {genderFilerData.map(item => (
            <ItemText key={item}>
              <ItemCheckBox
                type="checkbox"
                checked={gender === item}
                onChange={() => setGenderFilter(gender === item ? '' : item)}
              />
              {gender === item && (
                <CheckedIcon isGenderMenuOpen={isGenderMenuOpen}>
                  <CheckRound />
                </CheckedIcon>
              )}
              {gender !== item && (
                <Icon isGenderMenuOpen={isGenderMenuOpen}>
                  <Round />
                </Icon>
              )}
              {item}
            </ItemText>
          ))}
        </GenderSubMenu>
      </Menu>
    </>
  );
};

FilterSubMenu.propTypes = {
  isAgeMenuOpen: PropTypes.bool.isRequired,
  isGenderMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  setGenderFilter: PropTypes.func.isRequired,
  setAgeFilter: PropTypes.func.isRequired,
};

export default FilterSubMenu;
