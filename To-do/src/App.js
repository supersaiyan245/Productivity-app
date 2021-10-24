import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Chore from './components/Chores.js';


const apiUrl = ('https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy');

function App() {
  const [activity, setActivity] = useState([]);
  const [chore, setChore] = useState('');
  const [errand, setErrand] = useState('');
  const [fun, setFun] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(apiUrl);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadActivity = {
      chore,
      errand,
      fun,
    }

    await axios.post(apiUrl, { fields: loadActivity })
    
    setToggleFetch(!toggleFetch);
  }


  const handleKeyPress = ev => {
    if (ev.keyCode === 13) {
      handleSubmit();
    }
  }


  return (
    <div className="App">
      <nav className="headers">
        <Link to="/" >Home</Link>
        <Link to="/About Us" >About Us</Link>
        <Link to='/Recommendations'>Recommendations</Link>
        <Link to='/Chores/'>Chores</Link>
        <Link to='/Errands'>Errands</Link>
        <Link to='/Fun'>Fun</Link>
      </nav>
      <Route path="/">
        <form onSubmit={handleKeyPress}>
          
          <label>Chore</label>
          <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} />
          <label>Errand</label>
          <input value={errand} onChange={(e) => setErrand(e.target.value)} onKeyPress={handleKeyPress} />
          <label>Fun</label>
          <input value={fun} onChange={(e) => setFun(e.target.value)} onKeyPress={handleKeyPress} />
          <button type="submit">Submit</button>
        </form>
      </Route>
      <Route path='/Chores/' >
        <Chore
          chores={activity}
        />
      </Route>
    </div>
  );
}

export default App;
