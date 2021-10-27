import './App.css'
import Chore from './components/Chore';
import Nav from './components/Nav.js'
import { Route } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Route path="/">
      </Route> */}
      <Route path='/List/Chores/' exact>
        <Chore
        />
      </Route>
    </div>
  );
}

export default App;
