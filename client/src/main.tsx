import React from 'react';
import {ApolloProvider} from "@apollo/client";
import ReactDOM from 'react-dom/client';

import App from './App.tsx'
import './index.css'
import {client} from "./api";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
)
