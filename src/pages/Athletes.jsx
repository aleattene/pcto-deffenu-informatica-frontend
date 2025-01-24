import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';

function Athletes() {
  //const [athletes, setAthletes] = useState([]);

  // useEffect(() => {
  //  profilesService.getAthletes()
  //      .then((data) => setAthletes(data));
  // }, []);

  return (
    <div>
      <Dashboard content={"PAGINA ATLETI"}/>
    </div>
  );
}

export default Athletes;