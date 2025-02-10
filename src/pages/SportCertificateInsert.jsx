import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import SportCertificateForm from '../components/Form/SportCertificateForm.jsx';

function SportCertificateInsert() {

    return (
        <div>
            <Dashboard content={<SportCertificateForm isEditMode={false} />} />
        </div>
    );
}

export default SportCertificateInsert;