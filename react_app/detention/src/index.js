import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter } from 'react-router-dom';
import express from "express";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//sha256:42ce1b34ce6cf5a561bc99425f07e1d0aa3c3d596c6e5363ce0dee88a112b00f  
const app = express;
app.get( '/',(req, res) => 
  res.json({message: 'Docker is something for sure!'})
);
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('app listening on port 8080'))
//docker build -t ethicalmadscientist/virtual_detention:1.0 .
// docker ps

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();