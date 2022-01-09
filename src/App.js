import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import NavbarMain from './components/navbar/navbar_main';
import MainSchedule from './components/schedule/MainSchedule';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <MainSchedule />
    </div>
  );
}

export default App;
