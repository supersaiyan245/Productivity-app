import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';


  function Chore() {
  
  const [choreActivity, setChoreActivity] = useState([])
  const [dateValue, setDateValue] = useState(new Date());
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
      "Date": dateValue, 
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
      console.log(typeof dateValue)
      console.log(dateValue.toString())
    }
  }
    

  const deleteChore = async () => {
    const url = `https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%201?api_key=key6vJOZALxfOvCDy`;

      await axios.delete(url, chore);
  
    setToggleFetch(!toggleFetch);
    }
    const filteredChoreDate = choreActivity.filter(findChore => findChore.fields.date === dateValue)

  return (
    <div>
      <div className="react-calendar">
        <Calendar
          onChange={setDateValue}
          value={dateValue}
        />
      </div>
      <div className="form">
        <form onSubmit={handleKeyPress}>
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore" />
        </form>
      </div>
        <h5>{dateValue.toString().split(' ').slice(0, 4).join(' ')}</h5>
      {choreActivity.map(activity =>
        (<div>
            <input type="checkbox" id="chore" name="assignedChore" />
            <label htmlFor="chore">{activity.fields.Chore}</label>
            <button onClick = {deleteChore()}>Delete Chore</button>
        </div>
      ))}
    </div>
  )
}

export default Chore;
