import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';

function SportDoctors() {
  // const [sportDoctors, setSportDoctors] = useState([]);

  /*
  useEffect(() => {
    profilesService.getSportDoctors()
        .then((data) => setSportDoctors(data));
  }, []);
  */

  return (
    <div>
      <Dashboard content={"PAGINA MEDICI"}/>
    </div>
  );
}

export default SportDoctors;