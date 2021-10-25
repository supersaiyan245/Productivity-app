import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';


function Errand() {
  const [errand, setErrand] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const errandUrl = ("https://api.airtable.com/v0/app0MKbDlolCovy3v/Table%202?maxRecords=3&view=Grid%20view", {
    headers: {
      'Authorization': 'Bearer key6vJOZALxfOvCDy'
    }
  });
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(errandUrl);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);
}