import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';

function Errand() {
  const [errandActivity, setErrandActivity] = useState([])
  const [errand, setErrand] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const [errandDateValue, setErrandDateValue] = useState(new Date());
  const errandUrl = ('https://api.airtable.com/v0/appV9N1OcvuWjIRLw/Table%201?api_key=key6vJOZALxfOvCDy')
  useEffect(() => {
    const getErrandData = async () => {
      const resp = await axios.get(errandUrl);
      setErrandActivity(resp.data.records)

    }
    getErrandData();
  }, [toggleFetch]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const loadErrand = {
      "Date": errandDateValue, 
      "Errand": errand
    }

    await axios.post(errandUrl, { fields: loadErrand })
    
    setToggleFetch(!toggleFetch);
  }

  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
    }
  }


  return (
    <div>
       <Calendar
      className="react-calendar"
        onChange={setErrandDateValue}
        value={errandDateValue}
      />
    <div className="form">
      <form onSubmit={handleKeyPress}>
      <label>errand</label>
      <input value={errand} onChange={(e) => setErrand(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore" />
      </form>
    </div>
    <h5>{errandDateValue.toString().split(' ').slice(0, 4).join(' ')}</h5>
    {errandActivity.map(activity =>
      (<div className="chore-list">
          <input type="checkbox" id="errand" name="assignedErrand" />
          <label htmlFor="errand">{activity.fields.Errand}</label>
          {/* <button onClick = {deleteChore()}>Delete Chore</button> */}
      </div>
    ))}
  </div>
  )
}

export default Errand;
