export const handleError = error => {
  try {
    throw new Error(error);
  } catch (error) {
    alert(error.message);
    return false;
  }
};