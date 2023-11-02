import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StepTitles from './StepTitles/StepTitles';
import getTitle from './getTitle';
import {
  AddPetDiv,
  AddPetFormTitle,
  AddPetContainerForm,
} from './AddPetForm.styled';
import { Formik } from 'formik';
import { validatePetSchema } from './validatePet';
import { addNotice } from 'redux/notices/notices-operations';
import { useDispatch, useSelector } from 'react-redux';
import FirstStepForm from './FirstStepForm/FirstStepForm';
import SecondStepForm from './SecondStepForm/SecondStepForm';
import ThirdStepFormExpanded from './ThirdStepFormExpanded/ThirdStepFormExpanded';
import ThirdStepForm from './ThirdStepForm/ThirdStepForm';
import { selectIsLoading } from 'redux/auth/auth-selectors';
import { selectNoticesIsLoading } from 'redux/notices/notices-selectors';
import { ModalAddPet } from '../Modals';
import { addPet } from 'redux/pets/pets-operations';

const AddPetForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAddMyPetLoading = useSelector(selectIsLoading);
  const isAddPetLoading = useSelector(selectNoticesIsLoading);
  const isLoading = isAddMyPetLoading || isAddPetLoading;

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    category: '',
    title: '',
    name: '',
    sex: '',
    petURL: '',
    location: '',
    price: '',
    birthday: '',
    type: '',
    describe: '',
  });

  const title = getTitle(data);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleNextClick = e => {
    setStep(prevState => prevState + 1);
  };
  const handlePrevClick = () => {
    setStep(prevState => prevState - 1);
  };

  const handleSubmit = () => {
    if (!data.category) return;

    const commonData = {
      name: data.name,
      petURL: data.petURL,
      birthday: data.birthday,
      type: data.type,
      describe: data.describe,
    };

    const specificData = {};

    if (data.category === 'in-good-hands' || data.category === 'lost-found') {
      specificData.category = data.category;
      specificData.title = data.title;
      specificData.sex = data.sex;
      specificData.location = data.location;
    }

    if (data.category === 'sell') {
      specificData.category = data.category;
      specificData.title = data.title;
      specificData.price = data.price;
      specificData.sex = data.sex;
      specificData.location = data.location;
    }

    const pets = { ...commonData, ...specificData };

    const formData = new FormData();

    for (let key in pets) {
      formData.append(key, pets[key]);
    }
    dispatch(addNotice(formData));
    toggleModal();

    switch (data.category) {
      case 'in-good-hands':
        navigate('/notices/in-good-hands');
        break;
      case 'lost-found':
        navigate('/notices/lost-found');
        break;
      case 'sell':
        navigate('/notices/sell');
        break;
      case 'pet':
        dispatch(addPet(formData));
        toggleModal();
        navigate('/user');
        break;
      default:
        navigate('/user');
    }
  };

  const backPage = location.state?.from ?? '/user';

  return (
    <AddPetDiv data={data} step={step}>
      <Formik
        initialValues={data}
        validationSchema={validatePetSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <AddPetContainerForm>
            <AddPetFormTitle>{title}</AddPetFormTitle>
            <StepTitles step={step} />
            {step === 1 && (
              <FirstStepForm
                errors={errors}
                values={values}
                data={data}
                step={step}
                setData={setData}
                nextStep={handleNextClick}
                cancel={backPage}
              />
            )}
            {step === 2 && (
              <SecondStepForm
                touched={touched}
                setFieldValue={setFieldValue}
                errors={errors}
                values={values}
                data={data}
                step={step}
                setData={setData}
                nextStep={handleNextClick}
                backStep={handlePrevClick}
              />
            )}
            {step === 3 && data.category !== 'pet' ? (
              <ThirdStepFormExpanded
                errors={errors}
                data={data}
                step={step}
                setData={setData}
                backStep={handlePrevClick}
                submit={handleSubmit}
              />
            ) : (
              step === 3 && (
                <ThirdStepForm
                  errors={errors}
                  data={data}
                  step={step}
                  setData={setData}
                  backStep={handlePrevClick}
                  submit={handleSubmit}
                />
              )
            )}
          </AddPetContainerForm>
        )}
      </Formik>
      {isModalOpen && !isLoading && (
        <ModalAddPet show={isModalOpen} onHide={toggleModal} />
      )}
    </AddPetDiv>
  );
};

export default AddPetForm;
