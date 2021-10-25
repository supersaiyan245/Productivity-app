import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';


function Chore({ chores }) {
  const choreName = chores.find(identifyChore => identifyChore.fields.chore)
  const [chore, setChore] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const choreUrl = ('')
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadChore = {
      chore,
    }

    await axios.post(apiUrl, { fields: loadChore })
    
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
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore"/>
      </form>
      <input type="checkbox" id="chore" name="assignedChore" />
      <label for="chore">{choreName}</label>
    </div>
  )
}

export default Chore;