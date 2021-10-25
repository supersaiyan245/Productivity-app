import { useState, useEffect } from 'react';
import axios from 'axios';


function Chore({ chores }) {
  const [chore, setChore] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const choreUrl = ('https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy')
  useEffect(() => {
    const getChoreData = async () => {
      const resp = await axios.get(choreUrl);
      setActivity(resp.data.records)

    }
    getChoreData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadChore = {
      chore,
    }

    await axios.post(choreUrl, { fields: loadChore })
    
    setToggleFetch(!toggleFetch);
  }

  const handleKeyPress = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      handleSubmit();
    }
  }
  const choreName = chores.find(identifyChore => identifyChore.fields.chore)

  const deleteChore = async () => {
    // Try/Catch to handle 404 errors from the server
    // ie catch whenever someone deletes something before you
    const url = `https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy`;
    // props.chirp represents the data because it is given that value on App. 
    //Id is passed as the identifier for the object url to be delete
      await axios.delete(url);
  
    setToggleFetch(!props.toggleFetch);
    //This is telling the function to change toggle fetch so the page will load again
  }

  return (
    <div>
      <form onSubmit={handleKeyPress}>
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore" />
      </form>
      <input type="checkbox" id="chore" name="assignedChore" />
      <label for="chore">{choreName}</label> <button onClick = {deleteChore}></button>
    </div>
  )
}

export default Chore;
