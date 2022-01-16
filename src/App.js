import React,{ useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route path={'/match/lck'}>
        <MainSchedule />
      </Route>
      <Route path="/compare">
        <div>asfasg</div>
      </Route>
    </div>
  );
}

export default App;
