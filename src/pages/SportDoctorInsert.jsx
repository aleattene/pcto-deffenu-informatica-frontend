import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import SportDoctorForm from '../components/Form/SportDoctorForm.jsx';

function SportDoctorInsert() {

  return (
    <div>
      <Dashboard content={<SportDoctorForm/>}/>
    </div>
  );
}

export default SportDoctorInsert;