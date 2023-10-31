import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Loader from 'components/Loader/Loader';

const PublicRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuth();
  const { state } = useLocation();
  return (
    <>
      {isLoading && <Loader />}
      {!isLoggedIn ? children : <Navigate to={state ? state : '/user'} />}
    </>
  );
};

export default PublicRoute;
