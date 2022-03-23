export const getRandomIds = (limit: number, quantity: number) => {
  const ids: number[] = [];

  while (ids.length < quantity) {
    const randomId = Math.floor(Math.random() * limit) + 1;

    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }

  return ids;
};
