import { Paw } from 'components/icons';
import { Auth, LinkRegister, LinkLogin, Text } from './AuthNav.styled';

export const AuthNav = onClick => {
  return (
    <Auth>
      <LinkLogin to="/login" onClick={onClick}>
        <Text>Log IN </Text>
        <Paw />
      </LinkLogin>
      <LinkRegister to="/register" onClick={onClick}>
        <Text>Registration</Text>
      </LinkRegister>
    </Auth>
  );
};
