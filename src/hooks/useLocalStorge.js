import { useState, useEffect } from 'react';
const useLocalStorage = () => {
  const [pictures, setPictures] = useState(
    () => JSON.parse(localStorage.getItem('pictures')) ?? []
  );
  useEffect(() => {
    localStorage.setItem('pictures', JSON.stringify(pictures));
  }, [pictures]);
  return [pictures, setPictures];
};
export default useLocalStorage;
