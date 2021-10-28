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
    const filteredDate = (data) => {
      let specificChore = [];
      for (let i = 0; i < data.length; i++) {
        if (`${dateValue.getFullYear()}-${dateValue.getMonth() + 1}-${dateValue.getDate()}` === data[i].fields.Date.toString().split('T').slice(0, 1).toString()) {
          specificChore.push(data[i].fields.Chore)
        }
      }
      return specificChore;
    }

  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
      console.log("I have entered");
      console.log(typeof dateValue)
      console.log(dateValue.toString().split(' ').slice(0, 4))
      console.log(`${dateValue.getFullYear()}-${dateValue.getMonth()+ 1}-${dateValue.getDate()}`)
      console.log(choreActivity[0].fields.Date.toString().split('T').slice(0, 1));
      console.log(`${dateValue.getFullYear()}-${dateValue.getMonth() + 1}-${dateValue.getDate()}` === choreActivity[0].fields.Date.toString().split('T').slice(0, 1).toString())
      console.log(filteredDate(choreActivity));
      // console.log(filteredDate);
    }
  }
 

  const deleteChore = async (choreId) => {

      await axios.delete(choreUrl + `&records[]=${choreId}`);
  
    setToggleFetch(!toggleFetch);
    }
    
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
      {filteredDate(choreActivity).map(activity =>
        (<div className="chore-list">
            <input type="checkbox" id="chore" name="assignedChore" />
            <label htmlFor="chore">{activity}</label>
            <button onClick = {() => deleteChore(activity.id)}>Delete Chore</button>
        </div>
      ))}
    </div>
  )
}

export default Chore;
