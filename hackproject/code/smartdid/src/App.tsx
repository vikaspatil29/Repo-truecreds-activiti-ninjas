import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import DslApp from './components/DslApp/DslApp';

function App() {
  return (
    <Router>
      <DslApp></DslApp>
    </Router>
  );
}

export default App;
