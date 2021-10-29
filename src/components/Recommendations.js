import axios from 'axios';
import { useState } from 'react';


function Recommendations() {
  const [recommendations, setRecommendations] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true)
  const url = 'https://api.airtable.com/v0/apps9s4KZC7UVUDX6/Table%201?api_key=key6vJOZALxfOvCDy';

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const loadRecommendations = {
      "records": [
        {
          "fields": {
            Recommendations: recommendations
          }
        }
      ]
    }

    await axios.post(url, loadRecommendations)
    setToggleFetch(!toggleFetch);
  }


  const handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      handleSubmit(ev);
    }
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Tell Us How We Can Improve This App</h2>
      <form onSubmit={handleKeyPress}>
        <input className="form" value={recommendations} onChange={(e) => setRecommendations(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Recommendation" />
      </form>
    </div>
  )
}
export default Recommendations;