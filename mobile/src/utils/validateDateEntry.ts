const validateDateEntry = (date: string | null | undefined): boolean => {
  if (!date) return false;

  const [day, month, year] = date.split('/').map(number => Number(number));

  if (day < 1 || day > 31) return false;
  if (month < 1 || month > 12) return false;

  if (year < 1900 || year > new Date().getFullYear()) return false;

  return true;
};

export default validateDateEntry;
