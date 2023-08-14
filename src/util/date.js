export const getStringDate = (date) => {
  // new Date 날짜 형식 변환
  return date.toISOString().slice(0, 10); // '2023-08-10'
};
