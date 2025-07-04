import Axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getNameCollection = (): Promise<string[]> => {
  return Axios.get(url).then(({ data }) => data.map((user) => user.name));
};
