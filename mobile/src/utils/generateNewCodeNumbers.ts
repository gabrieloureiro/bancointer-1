const generateNewCodeNumbers = (): number[] => {
  const minNumber = 1;
  const maxNumber = 9;

  const length = 6;
  const newCodeNumbers = Array(length)
    .fill({})
    .map(() => Math.floor(Math.random() * maxNumber) + minNumber);

  return newCodeNumbers;
};

export default generateNewCodeNumbers;
