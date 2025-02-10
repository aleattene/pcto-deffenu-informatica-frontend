import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilesService from '../services/profilesService';
import paymentsService from '../services/paymentsService';
import Dashboard from '../components/Dashboard/Dashboard';
import PaymentForm from '../components/Form/PaymentForm';

function PaymentModify() {

    const { id } = useParams();
  
    const [payment, setPayment] = useState({
         payment_date:'',
         amount: '',
         trainer: ''

    });

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await paymentsService.getPaymentByID(id);
                setPayment(response);
            } catch (error) {
                console.error("Errore nel recupero del compenso:", error);
            }
        };
        fetchPayment();
    }, [id]);
    
    return (
        <div>
           <Dashboard content={<PaymentForm isEditMode={true} dataPayment={payment}/>} />
        </div>
    );
}

export default PaymentModify;
