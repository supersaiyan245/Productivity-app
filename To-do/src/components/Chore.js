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
    

  // const deleteChore = async (choreId) => {

  //     await axios.delete(`${choreUrl}/${choreId}`);
  
  //   setToggleFetch(!toggleFetch);
  //   }
    const filteredChoreDate = choreActivity.filter(findChore => findChore.fields.Date === dateValue.toString());
    console.log(dateValue.toString());
    console.log(new Date('choreActivity[0].fields.Date'));
    console.log(choreActivity);
// filter through the data and return a date that matches the date clicked on calendar(dateValue)
  return (
    <div>
      <Calendar
        className="react-calendar"
          onChange={setDateValue}
          value={dateValue}
        />
      <div className="form">
        <form onSubmit={handleKeyPress}>
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore" />
        </form>
      </div>
      <h5>{dateValue.toString().split(' ').slice(0, 4).join(' ')}</h5>
      {choreActivity.map(activity =>
        (<div className="chore-list">
            <input type="checkbox" id="chore" name="assignedChore" />
            <label htmlFor="chore">{activity.fields.Chore}</label>
            {/* <button onClick = {() => deleteChore(activity.id)}>Delete Chore</button> */}
        </div>
      ))}
    </div>
  )
}

export default Chore;
