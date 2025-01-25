import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';


function Trainers() {
    /*
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    profilesService.getTrainers()
        .then((data) => setTrainers(data));
  }, []);
 */
  return (
    <div>
      <Dashboard content={<Table data={data}/>}/>
    </div>
  );
}

export default Trainers;