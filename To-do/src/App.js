import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

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

  const handleEnter = async (ev) => {
    ev.preventDefault();

    const loadActivity = {
      chore,
      errand,
      fun,
    }

    await axios.post(url, {fields: loadActivity})
  }
  return (
    <div className="App">
      <nav className="headers">
        <Link to="/" >Home</Link>
        <Link to="/About Us" >About Us</Link>
        <Link to='/Recommendations'>Recommendations</Link>
        <Link to='/Chores'>Chores</Link>
        <Link to='/Errands'>Errands</Link>
        <Link to='/Fun'>Fun</Link>
      </nav>
      <Route path="/">
        <form 
      </Route>
    </div>
  );
}

export default App;
