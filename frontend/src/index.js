import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Navbar from "./Components/Navbar/Navbar";
import History from './Components/History/History';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <History/>
  </React.StrictMode>
);


