import './App.css'
import Chore from './components/Chore';
import Nav from './components/Nav.js'
import { Route } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';




function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Nav />
      </div>
      <Route path='/List/Chores/' exact>
        <Chore
        />
      </Route>
    </div>
  );
}

export default App;
