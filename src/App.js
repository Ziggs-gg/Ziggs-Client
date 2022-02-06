import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';
import ShowLeague from './components/navbar/ShowLeague';
import styled from 'styled-components';
import Player from './components/player/Player';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Switch>
        <Route path="/league/:leaguename" component={League} />
        <Route path="/match/:leaguename" component={MainSchedule} />
        <Route path="/player" component={Player} />
      </Switch>
    </div>
  );
}

export default App;
