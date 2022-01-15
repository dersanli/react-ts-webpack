import axios from 'axios';

const URI = 'https://api.chucknorris.io/jokes/random';

export type jokeType = {
  categories: [];
  created_at: Date;
  id: string;
  updated_at: Date;
  value: string;
};

export const getARandomJoke = async ():Promise<jokeType> => {
  const { data } = await axios.get<jokeType>(URI);
  return data;
};