import { Divide as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import { Wrapper } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <Wrapper>
      <Hamburger
        toggled={isOpen}
        toggle={setIsOpen}
        size={24}
        duration={0.7}
        distance="lg"
        rounded
        label="Show menu"
        color="#FFC107"
      />
    </Wrapper>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default BurgerMenu;
