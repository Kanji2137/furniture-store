import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/futura/FuturaPTBook.otf';
import './fonts/futura/FuturaPTHeavy.otf';
import './fonts/futura/FuturaPTMedium.otf';
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
