import Axios, { AxiosError } from 'axios';
import { MemberEntity } from './api-model';

const url: string = 'https://api.github.com/orgs/lemoncode/members';

export const getMembers = async (): Promise<MemberEntity[]> =>
  Axios.get(url)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      switch (error.response?.status) {
        case 403:
          throw 'You have reached the rate limit for this API';
        case 503:
          throw 'The service is currently unavailable';
      }
    });
