import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { theme } from 'styles';
import {
  SecondStepFormDiv,
  SecondStepFormInput,
  SecondStepFormTitle,
} from './SecondStepForm.styled';
import {
  AddPetBtnCancel,
  AddPetBtnCancelDiv,
  AddPetBtnItem,
  AddPetBtnList,
  AddPetBtnNext,
} from '../AddPetForm.styled';
import { ArrowLeft, Paw } from 'components/icons';
import { validateField } from '../validatePet';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const SecondStepForm = ({ data, setData, nextStep, backStep }) => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const isNameFieldValid = useMemo(
    () => !errors.name && !!data.name,
    [errors.name, data.name]
  );
  const isBirthdayFieldValid = useMemo(
    () => !errors.birthday && !!data.birthday,
    [errors.birthday, data.birthday]
  );
  const isBreedFieldValid = useMemo(
    () => !errors.type && !!data.type,
    [errors.type, data.type]
  );
  const isTitleFieldValid = useMemo(
    () => !errors.title && !!data.title,
    [errors.title, data.title]
  );

  useEffect(() => {
    if (data.category === 'pet') {
      setIsDisabled(
        !(isNameFieldValid && isBirthdayFieldValid && isBreedFieldValid)
      );
    }

    if (data.category !== 'pet') {
      setIsDisabled(
        !(
          isNameFieldValid &&
          isBirthdayFieldValid &&
          isBreedFieldValid &&
          isTitleFieldValid
        )
      );
    }
    getCurrentDate();
  }, [
    errors,
    data.category,
    isBirthdayFieldValid,
    isBreedFieldValid,
    isNameFieldValid,
    isTitleFieldValid,
  ]);

  function getCurrentDate() {
    return moment().format('DD.MM.YYYY');
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    const inputValue =
      name === 'birthday'
        ? new Date(value).toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : value;

    setData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <>
      <SecondStepFormDiv>
        {data.category !== 'pet' && (
          <>
            <SecondStepFormTitle htmlFor="title">
              Title of add
              <SecondStepFormInput
                style={{
                  borderColor: `${
                    !errors.title
                      ? `${theme.colors.blue}`
                      : !isTitleFieldValid
                      ? `${theme.colors.red}`
                      : `${theme.colors.green}`
                  }`,
                }}
                type="text"
                name="title"
                placeholder="Title of add"
                value={data.title}
                onChange={handleChange}
                onBlur={() => validateField('title', data, setErrors)}
                className={errors.title ? 'invalid' : ''}
              />
              {!!errors.title && <ErrorMessage message={errors.title} />}
            </SecondStepFormTitle>
          </>
        )}
        <>
          <SecondStepFormTitle htmlFor="name">
            Pet's name
            <SecondStepFormInput
              type="text"
              style={{
                borderColor: !errors.name
                  ? `${theme.colors.blue}`
                  : isNameFieldValid
                  ? null
                  : `${theme.colors.red}`,
              }}
              placeholder="Type name pet"
              name="name"
              onChange={handleChange}
              value={data.name}
              onBlur={() => validateField('name', data, setErrors)}
              className={errors.title ? 'invalid' : ''}
              required
            />
            {!!errors.name && <ErrorMessage message={errors.name} />}
          </SecondStepFormTitle>
        </>

        <>
          <SecondStepFormTitle htmlFor="birthday">
            Date of birth
            <SecondStepFormInput
              style={{
                borderColor: `${
                  !errors.birthday
                    ? `${theme.colors.blue}`
                    : !isBirthdayFieldValid
                    ? `${theme.colors.red}`
                    : `${theme.colors.green}`
                }`,
              }}
              type="date"
              placeholder="Type date of birth in format DD.MM.YYYY"
              name="birthday"
              data-pattern="**.**.****"
              max={getCurrentDate()}
              onChange={handleChange}
              value={moment(data.birthday, 'DD.MM.YYYY').format('YYYY-MM-DD')}
              onBlur={() => validateField('birthday', data, setErrors)}
              className={errors.birthday ? 'invalid' : ''}
            />
            {!!errors.birthday && <ErrorMessage message={errors.birthday} />}
          </SecondStepFormTitle>
        </>

        <>
          <SecondStepFormTitle htmlFor="type">
            Type
            <SecondStepFormInput
              type="text"
              placeholder="Type of pet"
              style={{
                borderColor: !errors.type
                  ? `${theme.colors.blue}`
                  : isBreedFieldValid
                  ? null
                  : `${theme.colors.red}`,
              }}
              name="type"
              onChange={handleChange}
              value={data.type}
              onBlur={() => validateField('type', data, setErrors)}
              className={errors.type ? 'invalid' : ''}
              required
            />
            {!!errors.type && <ErrorMessage message={errors.type} />}
          </SecondStepFormTitle>
        </>
      </SecondStepFormDiv>

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
          <AddPetBtnCancel type="button" onClick={backStep}>
            <AddPetBtnCancelDiv>
              <ArrowLeft width="24" height="24" />
              Back
            </AddPetBtnCancelDiv>
          </AddPetBtnCancel>
        </AddPetBtnItem>
      </AddPetBtnList>
    </>
  );
};

SecondStepForm.propTypes = {
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default SecondStepForm;
