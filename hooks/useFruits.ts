import useSWR, { SWRConfiguration } from 'swr';
import { IFruit } from '../interfaces';
// import { IProduct } from '../interfaces';

// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())

export const useFruits = (url: string, config: SWRConfiguration = {}) => {
  // const { data, error } = useSWR<IProduct[]>(`/api${url}`, fetcher, config);
  const { data, error } = useSWR<IFruit[]>(`/api${url}`, config);

  return {
    fruits: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};


/** Endpoints like this:
 *  {{url}}/api/fruits
 *  {{url}}/api/fruits/[slug]
 *  {{url}}/api/fruits?id=asdfkkqohehdiieoruhyqh
 *  {{url}}/api/fruits?gender=women
 *  {{url}}/api/fruits?gender=men
*/
