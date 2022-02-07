import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';
import Teams from './components/team/Teams';
import styled from 'styled-components';
import Player from './components/player/Player';
import MatchSummury from './components/schedule/MatchSummury';
function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route exact path="/">
        랜딩페이지
      </Route>
      <Switch>
        <Route path="/league/:leaguename" component={League} />
        <Route exact path="/match/:leaguename" component={MainSchedule} />
        <Route path="/match/:leaguename/:matchData" component={MatchSummury} />
        <Route path="/player/" component={Player} />
        <Route path="/teams/:teamname" component={Teams} />
      </Switch>
    </div>
  );
}

export default App;
