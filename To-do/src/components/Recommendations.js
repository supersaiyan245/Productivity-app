import axios from 'axios';
import { useState, useEffect } from 'react';


function Recommendations() {
  const [recommendation, setRecommendation] = useState('');
  const [recommendationData, setRecommendationData] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const url = 'https://api.airtable.com/v0/apps9s4KZC7UVUDX6/Table%201?api_key=key6vJOZALxfOvCDy';

  useEffect(() => {
    const getRecommendations = async () => {
      const resp = await axios.get(url);
      setRecommendationData(resp.data.records)
    }
    getRecommendations()
  }, [toggleFetch])

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadRecommendations = {
      recommendation
    }

    await axios.post(url, { fields: loadRecommendations })

    setToggleFetch(!toggleFetch);
  }

