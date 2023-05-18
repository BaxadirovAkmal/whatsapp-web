import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from 'pages/Auth';
import Home from 'pages/Home';

import "assets/style/fonts.css";
import "assets/style/styles.scss";

const App = () => {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Auth />}/>
        </Routes>
      </div>
  );
}

export default App;
