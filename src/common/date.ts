export const createDate = (): Date => {
  const date: number = Date.now();
  return new Date(date);
};
