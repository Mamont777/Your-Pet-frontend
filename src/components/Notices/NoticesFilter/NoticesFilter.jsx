import { useState, useEffect } from 'react';
import { useWindowSize } from 'hooks/useWindowSize';
import {
  FilterBtn,
  FilterWrapper,
  Filters,
  FiltersText,
} from './NoticesFilter.styled';
import CheckedFilter from '../CheckedFilter/CheckedFilter';
import { Filter } from 'components/icons';
import FilterSubMenu from '../FilterSubMenu/FilterSubMenu';

const NoticesFilter = ({ chooseGender, chooseAge }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgeMenuOpen, setIsAgeMenuOpen] = useState(false);
  const [isGenderMenuOpen, setIsGenderMenuOpen] = useState(false);
  const [screenWidth] = useWindowSize();
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const filterBtn = document.getElementById('filtersBtn');
    const menu = document.getElementById('filtersMenu');

    const outsideFilterMenuClickHandler = e => {
      if (
        e.target !== menu &&
        !menu.contains(e.target) &&
        e.target !== filterBtn &&
        !filterBtn.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener('click', outsideFilterMenuClickHandler);

    return () => {
      document.body.removeEventListener('click', outsideFilterMenuClickHandler);
    };
  }, []);

  useEffect(() => {
    chooseGender(gender);
  }, [chooseGender, gender]);

  useEffect(() => {
    chooseAge(age);
  }, [chooseAge, age]);

  const filtersToggle = e => {
    if (e.currentTarget.id === 'By age') {
      setIsAgeMenuOpen(prevState => !prevState);

      return;
    }

    if (e.currentTarget.id === 'By gender') {
      setIsGenderMenuOpen(prevState => !prevState);

      return;
    }

    setIsAgeMenuOpen(false);
    setIsGenderMenuOpen(false);
    setIsMenuOpen(prevState => !prevState);
  };

  const ageBtnText = age => {
    switch (age) {
      case '3m-12m':
        return '3 -12 m';

      case '1y':
        return '1 year';

      case '2y':
        return '2 year';

      default:
        return '';
    }
  };

  return (
    <FilterWrapper>
      {age && screenWidth >= 1280 && (
        <CheckedFilter text={ageBtnText(age)} clickHandler={() => setAge('')} />
      )}
      {gender && screenWidth >= 1280 && (
        <CheckedFilter text={gender} clickHandler={() => setGender('')} />
      )}
      <FilterBtn
        id="filtersBtn"
        onClick={filtersToggle}
        isOpen={isMenuOpen}
        type="button"
        aria-label="Filters"
      >
        {screenWidth >= 768 && 'Filter'}
        <Filter />
      </FilterBtn>
      <Filters
        id="filtersMenu"
        isOpen={isMenuOpen}
        isAgeMenuOpen={isAgeMenuOpen}
        isGenderMenuOpen={isGenderMenuOpen}
      >
        <FiltersText>Filters</FiltersText>
        <FilterSubMenu
          isAgeMenuOpen={isAgeMenuOpen}
          isGenderMenuOpen={isGenderMenuOpen}
          toggleMenu={filtersToggle}
          setGenderFilter={setGender}
          setAgeFilter={setAge}
          age={age}
          gender={gender}
        />
      </Filters>
    </FilterWrapper>
  );
};

export default NoticesFilter;
