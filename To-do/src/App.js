import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

const apiUrl = ('https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy');

function App() {
  const [activity, setActivity] = useState({});
  const [chore, setChore] = useState('')
  const [toggleFetch, setToggleFetch] = useState(true)
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(apiUrl);
      setActivity(resp.data.records[0])

    }
    getData();
  }, [toggleFetch])

  const handleEnter = async (ev) => {
    ev.preventDefault();

    const loadActivity = {

    }

  }
  return (
    <div className="App">
      <nav>
        <Link to="/" >Home</Link>
        <Link to="/Abous Us" >About Us</Link>
        <Link to='/Recommendations'>Recommendations</Link>
        <Link to='/Chores'>Chores</Link>
        <Link to='/Errands'>Errands</Link>
        <Link to='/Fun'>Fun</Link>
      </nav>
      <Route path="/">

      </Route>
    </div>
  );
}

export default App;
