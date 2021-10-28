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

  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
    }
  }
  return (
    <div>
      <form onSubmit={handleKeyPress}>
        <input className="form" value={recommendation} onChange={(e) => setRecommendation(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Recommendation" />
      </form>
    </div>
  )
}
export default Recommendations;