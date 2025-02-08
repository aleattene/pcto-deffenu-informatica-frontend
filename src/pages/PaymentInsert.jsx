import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import PaymentForm from '../components/Form/PaymentForm';

function PaymentInsert() {

  return (
    <div>
      <Dashboard content={<PaymentForm />}/>
    </div>
  );
}

export default PaymentInsert;