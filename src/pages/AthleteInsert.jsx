import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import AthleteForm from '../components/Form/AthleteForm';

function AthleteInsert() {

	return (
		<div>
			<Dashboard content={<AthleteForm isEditMode={false} />} />
		</div>
	);
}

export default AthleteInsert;