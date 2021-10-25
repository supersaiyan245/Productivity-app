import { useState, useEffect } from 'react';
import axios from 'axios';




const apiUrl = ('https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy');

function App() {
  const [activity, setActivity] = useState([]);
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
      errand,
      fun,
    }

    await axios.post(apiUrl, { fields: loadActivity })
    
    setToggleFetch(!toggleFetch);
  }


  const handleKeyPress = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      handleSubmit();
    }
  }


  return (
    <div className="App">
      <nav>
        <Link to="/" className="headers">Home</Link>
        <Link to="/About Us" className="headers">About Us</Link>
        <Link to='/Recommendations' className="headers">Recommendations</Link>
        <Link to='/List/Chores/' className="headers">Chores</Link>
        <Link to='/Errands' className="headers">Errands</Link>
        <Link to='/Fun' className="headers">Fun</Link>
      </nav>
      <Route path="/">
        <form onSubmit={handleKeyPress}>
          <button type="submit">Submit</button>
        </form>
      </Route>
      <Route path='/List/Chores/' exact>
        <Chore
          chores={activity}
        />
      </Route>
    </div>
  );
}

export default App;
