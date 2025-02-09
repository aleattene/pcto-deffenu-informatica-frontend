import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import SportDoctorForm from '../components/Form/SportDoctorForm';

function SportDoctorModify() {

    const { id } = useParams();

    const [sportDoctor, setSportDoctor] = useState({
        first_name: '',
        last_name: '',
        vat_number: ''
    });

    useEffect(() => {
        const fetchSportDoctor = async () => {
            try {
                const response = await profilesService.getSportDoctorByID(id);
                setSportDoctor(response);
            } catch (error) {
                console.error("Errore nel recupero del medico sportivo:", error);
            }
        };
        fetchSportDoctor();
    }, [id]);

    return (
        <div>
            <Dashboard content={<SportDoctorForm isEditMode={true} dataSportDoctor={sportDoctor} />} />
        </div>
    );
}

export default SportDoctorModify;
