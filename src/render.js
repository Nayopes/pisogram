
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderPage = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} />
    </React.StrictMode>
  );
}

reportWebVitals();
