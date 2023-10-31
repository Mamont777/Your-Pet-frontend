import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useWindowSize } from 'hooks/useWindowSize';
import { PlusSmall, Plus } from 'components/icons';
import { Btn } from './AddPetButton.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { ModalAttention } from 'components/Modals';

export const AddPetButton = () => {
  const screenWidth = useWindowSize();
  const location = useLocation();
  const [modalAttentionShow, setModalAttentionShow] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleModalUautorised = () => {
    setModalAttentionShow(!modalAttentionShow);
  };

  return (
    <>
      {isLoggedIn ? (
        <Btn to="/add-pet" state={{ from: `${location.pathname}` }}>
          {screenWidth < 768 && <Plus />}
          Add Pet
          {screenWidth >= 768 && <PlusSmall />}
        </Btn>
      ) : (
        <Btn onClick={toggleModalUautorised}>
          {screenWidth < 768 && <Plus />}
          Add Pet
          {screenWidth >= 768 && <PlusSmall />}
        </Btn>
      )}
      <ModalAttention
        show={modalAttentionShow}
        onHide={toggleModalUautorised}
      />
    </>
  );
};
