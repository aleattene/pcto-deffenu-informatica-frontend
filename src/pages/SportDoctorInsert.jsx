import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import SportDoctorForm from '../components/Form/SportDoctorForm.jsx';

function SportDoctorInsert() {

	return (
		<div>
			<Dashboard content={<SportDoctorForm isEditMode={false} />} />
		</div>
	);
}

export default SportDoctorInsert;