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


