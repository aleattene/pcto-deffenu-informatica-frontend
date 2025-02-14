import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import paymentsService from '../services/paymentsService';
import Dashboard from '../components/Dashboard/Dashboard';
import PaymentForm from '../components/Form/PaymentForm';
import PageLayout from '../components/Layout/PageLayout';

function PaymentModify() {

    const { id } = useParams();

    // Payments
    const [payment, setPayment] = useState({
        payment_date: '',
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
            <PageLayout>
                <Dashboard
                    isViewMode={false}
                    formComponent={<PaymentForm
                        isEditMode={true}
                        dataPayment={payment}
                    />}
                />
            </PageLayout>
        </div>
    );
}

export default PaymentModify;
