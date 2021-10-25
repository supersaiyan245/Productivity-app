import { useState, useEffect } from 'react';
import axios from 'axios';


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

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadChore = {
      chore,
    }

    await axios.post(errandUrl, { fields: loadChore })
    
    setToggleFetch(!toggleFetch);
  }

  const handleKeyPress = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      handleSubmit();
    }
  }

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
