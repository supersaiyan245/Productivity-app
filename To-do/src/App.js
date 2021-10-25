import { useState, useEffect } from 'react';
import axios from 'axios';
import Chore from './components/Chores';
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
