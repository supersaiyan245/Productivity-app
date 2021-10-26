import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';


  function Chore() {
  
  const [choreActivity, setChoreActivity] = useState([])
  const [value, onChange] = useState(new Date());
  const [chore, setChore] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const choreUrl = ('https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy')
  useEffect(() => {
    const getChoreData = async () => {
      const resp = await axios.get(choreUrl);
      setChoreActivity(resp.data.records)

    }
    getChoreData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    const loadChore = {
      "Date": value, 
      "Chore": chore
    }

    await axios.post(choreUrl, { fields: loadChore })
    
    setToggleFetch(!toggleFetch);
  }

  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
      console.log("I have entered");
      console.log(value)
    }
    }
    
    const getChores = (choreActivity.forEach(activeChore =>  activeChore.fields.chore))

  const deleteChore = async () => {
    // Try/Catch to handle 404 errors from the server
    // ie catch whenever someone deletes something before you
    const url = `https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy`;
    // props.chirp represents the data because it is given that value on App. 
    //Id is passed as the identifier for the object url to be delete
      await axios.delete(url);
  
    setToggleFetch(!toggleFetch);
    //This is telling the function to change toggle fetch so the page will load again
  }

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
      <form onSubmit={handleKeyPress}>
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore" />
      </form>
        <input type="checkbox" id="chore" name="assignedChore" />
      <label htmlFor="chore">{getChores }</label>
      <button onClick = {deleteChore}>Delete Chore</button>
    </div>
  )
}

export default Chore;
