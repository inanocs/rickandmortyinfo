export const getEpisodeByUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};
