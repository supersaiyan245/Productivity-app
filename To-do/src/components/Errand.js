import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';


function Errand() {
  const [errand, setErrand] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const errandUrl = ("https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%202?maxRecords=3&view=Grid%20view", {
    headers: {
      'Authorization': 'Bearer key6vJOZALxfOvCDy'
    }
  });
  useEffect(() => {
    const getErrandData = async () => {
      const resp = await axios.get(errandUrl);
      setActivity(resp.data.records)

    }
    getErrandData();
  }, [toggleFetch]);

  return (
    <div>
      <form onSubmit={handleKeyPress}>
      <label>Errand</label>
          <input value={errand} onChange={(e) => setErrand(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add an Errand"/>
      </form>
    </div>
  )
}

export default Errand;
