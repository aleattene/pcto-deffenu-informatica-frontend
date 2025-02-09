import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import AthleteForm from '../components/Form/AthleteForm';

function AthleteModify() {

    const { id } = useParams();

    const [athlete, setAthlete] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        place_of_birth: '',
        fiscal_code: '',
        category: ''
    });

    useEffect(() => {
        const fetchAthlete = async () => {
            try {
                const response = await profilesService.getAthleteByID(id);
                const { trainers, ...dataAthlete } = response
                setAthlete(dataAthlete);
            } catch (error) {
                console.error("Errore nel recupero dell'atleta:", error);
            }
        };
        fetchAthlete();
    }, [id]);

    return (
        <div>
            <Dashboard content={<AthleteForm isEditMode={true} dataAthlete={athlete} />} />
        </div>
    );
}

export default AthleteModify;
