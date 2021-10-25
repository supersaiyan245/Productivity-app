import { useState, useEffect } from 'react';
import axios from 'axios';
import Chores from './components/Chores';





function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Route path="/">
      </Route> */}
      <Route path='/List/Chores/' exact>
        <Chore
          chores={}
        />
      </Route>
    </div>
  );
}

export default App;
