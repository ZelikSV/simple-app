import React from 'react';
import {ApolloProvider} from "@apollo/client";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import './index.scss';
import {client} from "./api";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
          <BrowserRouter>
              <ApolloProvider client={client}>
                    <App />
              </ApolloProvider>
          </BrowserRouter>
  </React.StrictMode>,
)
