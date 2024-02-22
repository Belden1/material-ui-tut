import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { themeOptions } from './theme/material.theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
