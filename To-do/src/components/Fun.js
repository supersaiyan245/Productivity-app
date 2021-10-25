import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';


function Fun() {
  const [fun, setFun] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const funUrl = ('')
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);
}