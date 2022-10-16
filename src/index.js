import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { AuthContextProvider } from 'components/AuthContext/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
