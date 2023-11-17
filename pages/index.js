//frontend 

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    async function fetchSightings() {
      const response = await axios.get('/sightings');
      setSightings(response.data);
    }
    fetchSightings();
  }, []);

  return (
    <div style={{ backgroundColor: '#111', color: 'white' }}>
      <h1>Ghost Sightings</h1>
      <ul>
        {sightings.map(sighting => (
          <li key={sighting._id}>
            <h2>{sighting.title}</h2>
            <p>{sighting.story}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
