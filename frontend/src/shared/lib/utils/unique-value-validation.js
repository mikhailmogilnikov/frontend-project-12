/* eslint-disable */
export const uniqueNameValidation = (array) => (value) => {
  const sameName = array.find(({ name }) => name === value);
  return !sameName;
};
