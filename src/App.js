import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import SubNavbar from './components/SubNavbar';
import NavbarMain from './components/navbar_main';
import TestCpn from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <TestCpn />
    </div>
  );
}

export default App;
