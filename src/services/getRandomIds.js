export const getRandomIds = (limit, quantity) => {
  const ids = [];

  while (ids.length < quantity) {
    const randomId = Math.floor(Math.random() * limit) + 1;

    if (!ids.includes(randomId)) {
      ids.push(randomId);
    }
  }

  return ids;
};
