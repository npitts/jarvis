import logo from './logo.svg';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState, useEffect, Component } from 'react';
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
