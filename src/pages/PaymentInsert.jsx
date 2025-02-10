import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import PaymentForm from '../components/Form/PaymentForm';

function PaymentInsert() {

  return (
    <div>
      <Dashboard content={<PaymentForm isEditMode={false}/>}/>
    </div>
  );
}

export default PaymentInsert;