import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import TrainerForm from '../components/Form/TrainerForm';

function TrainerInsert() {

  return (
    <div>
      <Dashboard content={<TrainerForm isEditMode={false} />}/>
    </div>
  );
}

export default TrainerInsert;