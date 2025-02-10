import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import TrainerForm from '../components/Form/TrainerForm';


function TrainerModify() {
    
    const { id } = useParams();

    // Trainers
    const [trainer, setTrainer] = useState({
        first_name: '',
        last_name: '',
        fiscal_code: ''
    });

    useEffect(() => {
        const fetchTrainer = async () => {
            try {
                const response = await profilesService.getTrainerByID(id);
                setTrainer(response);
            } catch (error) {
                console.error("Errore nel recupero dell'allenatore:", error);
            }
        };
        fetchTrainer();
    }, [id]);
    
    return (
        <div>
           <Dashboard content={<TrainerForm isEditMode={true} dataTrainer={trainer}/>} />
        </div>
    );
}

export default TrainerModify;
