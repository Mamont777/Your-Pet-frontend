import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderMenu,
  HeaderWrapper,
  IconOpenMenu,
  UserNavBox,
} from './Header.styled';
import Logo from 'components/Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
} from 'redux/auth/auth-selectors';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useWindowSize } from './useWindowSize';
import { LogoutLink } from 'components/Nav/LogoutLink/LogoutLink';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

export const Header = () => {
  const isRegistered = useSelector(selectIsRegistered);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [click, setClick] = useState(false);
  const [screenWidth] = useWindowSize();
  const auth = isRegistered || isLoggedIn;
  const [isOpen, setIsOpen] = useState(false);

  const changeClick = () => setClick(prevClick => !prevClick);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo onClick={() => changeClick()} />

        <HeaderMenu>
          {screenWidth >= 768 && screenWidth <= 1279 && auth && (
            <UserNavBox>{click ? <LogoutLink /> : <UserNav />}</UserNavBox>
          )}
          {screenWidth >= 1280 && auth && (
            <UserNavBox>
              <LogoutLink />
              <UserNav />
            </UserNavBox>
          )}
          {screenWidth >= 768 && !auth && !isRefreshing && (
            <AuthNav onClick={() => changeClick()} />
          )}

          {screenWidth <= 1279 && (
            <IconOpenMenu onClick={() => changeClick()}>
              <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </IconOpenMenu>
          )}
          <Nav
            click={click}
            onClick={() => changeClick()}
            screenWidth={screenWidth}
          />
        </HeaderMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
