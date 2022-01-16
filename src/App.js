import React, { useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import NavbarMain from './components/navbar_main';
import MainSchedule from './components/MainSchedule';

function App() {
  return (
    <div className="App">
      <NavbarMain />
    </div>
  );
}

export default App;
