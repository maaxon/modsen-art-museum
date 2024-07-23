import * as yup from 'yup';

export const searchSchema = yup
  .string()
  .max(50, 'Query is too long. Maximum length is 50 characters.')
  .matches(/^[a-zA-Z0-9\s]*$/, 'Only Latin letters, digits, and spaces are allowed');
