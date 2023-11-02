import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UserData from 'components/UserCard/UserData/UserData';
import {
  AddPetBtn,
  MainContainer,
  PetsContainer,
  Title,
} from 'components/UserCard/UserData/UserData.styled';
import PetsData from 'components/UserCard/PetsData/PetsData';
import { PlusSmall } from 'components/icons';
import { selectIsRegistered } from 'redux/auth/auth-selectors';
import { ModalCongrats } from 'components/Modals';
import { fetchPets } from 'redux/pets/pets-operations';

const User = () => {
  const [modalCongratsShow, setModalCongratsShow] = useState(true);
  const isRegistered = useSelector(selectIsRegistered);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <>
      {isRegistered && modalCongratsShow && (
        <ModalCongrats
          show={modalCongratsShow}
          onHide={() => setModalCongratsShow(false)}
        />
      )}

      <MainContainer>
        <div>
          <Title>My information:</Title>
          <UserData />
        </div>

        <div style={{ width: '100%' }}>
          <PetsContainer>
            <Title>My pets:</Title>
            <AddPetBtn to="/add-pet" state={{ from: `${location.pathname}` }}>
              Add Pet <PlusSmall />
            </AddPetBtn>
          </PetsContainer>
          <PetsData />
        </div>
      </MainContainer>
    </>
  );
};

export default User;
