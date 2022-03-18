import { useState } from 'react';

export const useUser = () => {
  const [data, setData] = useState(null);
  return { data, setData };
};
