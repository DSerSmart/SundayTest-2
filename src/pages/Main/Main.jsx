import { AuthContext } from 'components/AuthContext/AuthContext';
import { Gallery } from 'components/Gallery/Gallery';
import { useContext } from 'react';

export const Main = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <div>
      <button type="button" onClick={() => setUser(null)}>
        LogOut
      </button>
      <Gallery />
    </div>
  );
};
