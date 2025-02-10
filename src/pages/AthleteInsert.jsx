import React from 'react';
import AthleteForm from '../components/Form/AthleteForm';
import Dashboard from '../components/Dashboard/Dashboard';

function AthleteInsert() {

	return (
		<div>
			<Dashboard content={<AthleteForm isEditMode={false} />} />
		</div>
	);
}

export default AthleteInsert;