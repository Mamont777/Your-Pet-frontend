import React, { useState } from 'react';
import {
  NavMenu,
  NavMenuItemLink,
  NavMenuItem,
  UserNavContainerMobile,
  AuthContainerMobile,
  LogoutButtnMobile,
} from './Nav.styled';
import { UserNav } from 'components/UserNav/UserNav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { LogoutLink } from './LogoutLink/LogoutLink';

export const Nav = ({ click, onClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [activeItem] = useState(null);

  return (
    <NavMenu click={click}>
      {isLoggedIn && (
        <LogoutButtnMobile onClick={onClick}>
          <LogoutLink />
        </LogoutButtnMobile>
      )}

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink
          to="/friends"
          className={activeItem === '/friends' ? 'active' : ''}
        >
          Our friends
        </NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink
          to="/notices/sell"
          className={activeItem === '/notices/sell' ? 'active' : ''}
        >
          Find pet
        </NavMenuItemLink>
      </NavMenuItem>

      <NavMenuItem onClick={onClick}>
        <NavMenuItemLink
          to="/news"
          className={activeItem === '/news' ? 'active' : ''}
        >
          News
        </NavMenuItemLink>
      </NavMenuItem>

      <>
        {isLoggedIn ? (
          <UserNavContainerMobile onClick={onClick}>
            <UserNav />
          </UserNavContainerMobile>
        ) : (
          <AuthContainerMobile onClick={onClick}>
            <AuthNav />
          </AuthContainerMobile>
        )}
      </>
    </NavMenu>
  );
};
