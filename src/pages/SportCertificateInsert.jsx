import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import SportCertificateForm from '../components/Form/SportCertificateForm.jsx';

function SportCertificateInsert() {

  return (
    <div>
      <Dashboard content={<SportCertificateForm/>}/>
    </div>
  );
}

export default SportCertificateInsert;