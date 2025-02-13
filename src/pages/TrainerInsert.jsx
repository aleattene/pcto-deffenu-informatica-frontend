import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import TrainerForm from '../components/Form/TrainerForm';
import PageLayout from '../components/Layout/PageLayout';

function TrainerInsert() {

    return (
        <div>
			<PageLayout>
                <Dashboard
					isViewMode={false}
					formComponent={<TrainerForm 
						isEditMode={false} />}
                />
            </PageLayout>
        </div>
    );
}

export default TrainerInsert;