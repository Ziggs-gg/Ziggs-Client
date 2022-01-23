import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';
import ShowLeague from './components/navbar/ShowLeague';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route path="/League">
        <League />
      </Route>
      <Route path="/match/:leaguename">
        <MainSchedule />
      </Route>
    </div>
  );
}

export default App;
