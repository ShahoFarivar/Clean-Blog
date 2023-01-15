import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// const domain = process.env.AUT0_DOMAIN
// const clientId = process.env.AUT0_CLIENTID
const domain = "dev-gu1yjgi1l3noiqo5.us.auth0.com"
const clientId = "Mh8YKJ3kGcZlFxDXKDR5lzhxhnDJKrm8"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
);
