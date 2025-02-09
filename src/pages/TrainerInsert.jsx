import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import TrainerForm from '../components/Form/TrainerForm';

function TrainerInsert() {

  return (
    <div>
      <Dashboard content={<TrainerForm isEditMode={false} />}/>
    </div>
  );
}

export default TrainerInsert;