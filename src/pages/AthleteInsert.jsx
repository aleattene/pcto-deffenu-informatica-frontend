import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import AthleteForm from '../components/Form/AthleteForm';

function AthleteInsert() {

  return (
    <div>
      <Dashboard content={<AthleteForm isEditMode={false} />}/>
    </div>
  );
}

export default AthleteInsert;