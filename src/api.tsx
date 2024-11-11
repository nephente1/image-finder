import { useQuery } from '@tanstack/react-query';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const url = import.meta.env.VITE_API_URL;

export const fetchImage = async (category: string) => {
  if (category !== '' && category !== 'other') {
    try {
      const response = await fetch(`${url}${category}`, {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok'); // needed fo handling error for ReactQuery
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  } else {
    return 'Plese select an image category';
  }
};

export const useImageQuery = (category: string) =>
  useQuery({
    // Query key is an array of strings, which React Query will use to create a unique cache key for the data.
    // In this case, the key is an array with two elements: the string 'image' and the category string.
    // This means that React Query will store the data in a cache with a key like 'image-travel' or 'image-cars'.
    // When the category changes, React Query will automatically refetch the data and update the cache with the new key.
    queryKey: ['image', category], // Cache key based on category
    queryFn: () => fetchImage(category),

    // Configuration object goes here
    staleTime: 1000 * 60 * 20, // Cache data for 5 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retryOnMount: false,
  });
