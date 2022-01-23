import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';
import ShowLeague from './components/navbar/ShowLeague';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route path="/league">
        <League />
      </Route>
    </div>
  );
}

export default App;
