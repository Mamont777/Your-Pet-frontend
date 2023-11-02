import * as Yup from 'yup';

export const validatePetSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must not exceed 60 characters'),
  category: Yup.string()
    .required('Category is required')
    .oneOf(['pet', 'sell', 'lostFound', 'hands'], 'Invalid category'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must not exceed 16 characters'),
  birthday: Yup.string()
    .required('Date is required')
    .matches(
      /^(\d{2})-(\d{2})-(\d{4})$/,
      'Invalid date format. Use DD-MM-YYYY'
    ),
  type: Yup.string()
    .required('Type is required')
    .min(2, 'Type must be at least 2 characters')
    .max(30, 'Type must not exceed 30 characters'),
  petURL: Yup.mixed()
    .required('Foto is required')
    .test(
      'fileSize',
      'File size must not exceed 3MB',
      value => value && value.size <= 3 * 1024 * 1024
    ),
  sex: Yup.string()
    .required('Sex is required')
    .oneOf(['male', 'female'], 'Invalid sex'),
  location: Yup.string()
    .required('Location is required')
    .matches(/^[A-Z][a-zA-Z]*(-[a-zA-Z]+)?$/i, 'Invalid location format'),
  price: Yup.number()
    .positive('Price must be greater than 0')
    .required('Price is required'),
  describe: Yup.string().test(
    'comments',
    'Comments must be between 4 and 120 characters',
    value => {
      if (!value) {
        return false;
      }
      return value.length >= 4 && value.length <= 120;
    }
  ),
});

export const validateField = async (fieldName, value, setErrors) => {
  try {
    await validatePetSchema.validateAt(fieldName, value);
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  } catch (error) {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: error.message,
    }));
  }
};
