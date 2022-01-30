import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';
import Teams from './components/team/Teams';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route exact path="/">
        랜딩페이지
      </Route>
      <Route path="/League/LCK">
        <League />
      </Route>
      <Route path="/match/LCK">
        <MainSchedule />
      </Route>
      <Route path="/teams">
        <Teams />
      </Route>
    </div>
  );
}

export default App;
