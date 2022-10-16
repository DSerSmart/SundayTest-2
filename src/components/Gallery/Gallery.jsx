import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorge';

export const Gallery = () => {
  const [images, setImages] = useLocalStorage();
  useEffect(() => {
    !images?.length &&
      fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(res => res.json())
        .then(data => setImages(data.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {images.map(e => (
        <li key={e}>
          <img src={e} alt={e} width="500" />
        </li>
      ))}
    </ul>
  );
};
