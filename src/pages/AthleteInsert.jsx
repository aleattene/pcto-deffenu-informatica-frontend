import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import Form from '../components/Form/Form';

function AthleteInsert() {

  return (
    <div>
      <Dashboard content={<Form />}/>
    </div>
  );
}

export default AthleteInsert;