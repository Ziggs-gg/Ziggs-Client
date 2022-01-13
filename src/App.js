import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import League from './components/league/League';
import NavbarMain from './components/navbar/navbar_main';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Route path="/League">
        <League />
      </Route>
    </div>
  );
}

export default App;
