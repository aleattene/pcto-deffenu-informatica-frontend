import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import PaymentForm from '../components/Form/PaymentForm';
import PageLayout from '../components/Layout/PageLayout';

function PaymentInsert() {

    return (
        <div>
            <PageLayout>
                <Dashboard
                    isViewMode={false}
                    formComponent={<PaymentForm
                        isEditMode={false} />}
                />
            </PageLayout>
        </div>
    );
}

export default PaymentInsert;