import './App.css'
import Home from './components/Home.js';
import Chore from './components/Chore';
import Nav from './components/Nav.js'
import { Route } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'; 
import AboutUs from './components/About Us';




function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <Route path="/" >
        <Home />
      </Route>
      <Route path='/List/Chores/' exact>
        <Chore
        />
      </Route>
    </div>
  );
}

export default App;
