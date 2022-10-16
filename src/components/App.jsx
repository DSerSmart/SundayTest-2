import { Auth } from 'pages/Auth/Auth';
import { Main } from 'pages/Main/Main';
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContext';

export const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {user ? <Main /> : <Auth />}
    </div>
  );
};
