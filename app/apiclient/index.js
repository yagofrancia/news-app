/* eslint-disable */

export const getNews = async () => {
  const baseUrl = 'https://newsapi.org/v2/top-headlines';
  const key = '&apiKey=24346c61cc824f9ba7e3bbd995b655cb';
  const country = '?country=us';
  const url = baseUrl + country + key;
  // console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  return data.articles;
};

/* eslint-enable */
