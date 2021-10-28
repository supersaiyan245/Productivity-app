import './App.css'
import Home from './components/Home.js';
import Chore from './components/Chore';
import Nav from './components/Nav.js'
import { Route } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'; 
import AboutUs from './components/About Us.js';
import Errand from './components/Errand';
import Recommendations from './components/Recommendations';




function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <Route path="/" >
        <Home />
      </Route>
      <Route path="/About Us" exact>
        <AboutUs />
      </Route>
      <Route path='/List/Chores/' exact>
        <Chore
        />
      </Route>
      <Route path="/Errands">
        <Errand
        />
      </Route>
      <Route path="/Recommendations" exact>
        <Recommendations />
      </Route>
    </div>
  );
}

export default App;
