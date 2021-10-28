import { useState, useEffect } from 'react';
import axios from 'axios';


function Fun() {
  const [fun, setFun] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const funUrl = ("https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%203?maxRecords=3&view=Grid%20view", {
    headers: {
      'Authorization': 'Bearer key6vJOZALxfOvCDy'
    }
  })
  useEffect(() => {
    const getFunData = async () => {
      const resp = await axios.get(funUrl);
      setActivity(resp.data.records)

    }
    getFunData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadFun = {
      fun,
    }

    await axios.post(funUrl, { fields: loadFun })
    
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
        <label>Fun</label>
        <input value={fun} onChange={(e) => setFun(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Fun thing"/>
      </form>
    </div>
  )
}

export default Fun;