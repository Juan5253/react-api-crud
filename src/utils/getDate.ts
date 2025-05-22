export const getOnlyDate = (dateTimeString: string | undefined | null): string => {
  if (!dateTimeString) return '';
  //YYYY-MM-DD
  return dateTimeString.substring(0, 10);
};