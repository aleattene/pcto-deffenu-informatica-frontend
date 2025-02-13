import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import SportDoctorForm from '../components/Form/SportDoctorForm.jsx';
import PageLayout from '../components/Layout/PageLayout';

function SportDoctorInsert() {

    return (
        <div>
            <PageLayout>
                <Dashboard
                    isViewMode={false}
                    formComponent={<SportDoctorForm
                        isEditMode={false} />}
                />
            </PageLayout>
        </div>
    );
}

export default SportDoctorInsert;