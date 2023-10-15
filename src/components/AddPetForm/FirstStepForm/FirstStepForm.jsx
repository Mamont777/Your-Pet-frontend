import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FirstStepFormItemInput,
  FirstStepFormItemLabel,
  FirstStepFormList,
} from './FirstStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { ArrowLeft, Paw } from 'components/icons';
import { Link } from 'react-router-dom';

const FirstStepForm = ({ data, setData, nextStep, cancel }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!data.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [data.category]);

  const handleChange = e => {
    const { name, value } = e.target;

    setData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <FirstStepFormList>
        {/* ----------- first step content radio btn ------------- */}
        <FirstStepFormItemLabel active={data.category === 'pet'}>
          <FirstStepFormItemInput
            autoFocus="on"
            type="radio"
            value="pet"
            checked={data.category === 'pet'}
            name="category"
            onChange={handleChange}
          />
          your pet
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'sell'}>
          <FirstStepFormItemInput
            type="radio"
            value="sell"
            checked={data.category === 'sell'}
            onChange={handleChange}
            name="category"
          />
          sell
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'lost-found'}>
          <FirstStepFormItemInput
            type="radio"
            value="lost-found"
            checked={data.category === 'lost-found'}
            onChange={handleChange}
            name="category"
          />
          lost/found
        </FirstStepFormItemLabel>
        <FirstStepFormItemLabel active={data.category === 'in-good-hands'}>
          <FirstStepFormItemInput
            type="radio"
            value="in-good-hands"
            checked={data.category === 'in-good-hands'}
            onChange={handleChange}
            name="category"
          />
          in good hands
        </FirstStepFormItemLabel>
      </FirstStepFormList>

      <AddPetBtnList>
        <AddPetBtnItem>
          <AddPetBtnNext
            type="button"
            onClick={nextStep && (() => nextStep(false))}
            disabled={isDisabled}
          >
            Next
            <Paw width="24" height="24" fill="#FEF9F9" />
          </AddPetBtnNext>
        </AddPetBtnItem>

        <AddPetBtnItem>
          <Link to={cancel}>
            <AddPetBtnCancel type="button">
              <AddPetBtnCancelDiv>
                <ArrowLeft width="24" height="24" />
                Cancel
              </AddPetBtnCancelDiv>
            </AddPetBtnCancel>
          </Link>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

FirstStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  cancel: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  nextStep: PropTypes.func.isRequired,
};

export default FirstStepForm;
