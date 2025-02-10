import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profilesService from '../../services/profilesService';
import Button from '../Button/Button';
import './TrainerForm.css';

function TrainerForm({isEditMode=false, dataTrainer = {}}) {

    const navigate = useNavigate();

    // Set the initial state to empty array
    const [trainer, setTrainer] = useState([]);

    // Update the state when dataTrainer are available
        useEffect(() => {
            if (isEditMode && dataTrainer) {
                setTrainer(dataTrainer);
            }
        }, [isEditMode, dataTrainer]);
    
    // Update the state when fields change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setTrainer(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle the submit (create or update trainer)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditMode) {
                await profilesService.updateTrainer(trainer.id, trainer);
                alert("Allenatore aggiornato con successo!");
            } else {
                await profilesService.createTrainer(trainer);
                alert("Allenatore creato con successo!");
            }
            navigate('/trainers')
        } catch (error) {
            console.error("Errore nel salvataggio dell'allenatore: ", error);
            alert("Si è verificato un errore nel salvataggio dell'allenatore.");
        }
    };

return (
    <div id="form-container">
    <h1>{isEditMode ? "Modifica Allenatore" : "Aggiungi Allenatore"}</h1>
    <form id="trainers-form" onSubmit={handleSubmit}>
    <div id="trainers-container">
        <div class="trainers-group">
            
            <label for="first_name">Nome</label>
            <input type="text" id="first_name" name="first_name" value={trainer.first_name} onChange={handleChange} required />
            
            <label for="last_name">Cognome</label>
            <input type="text" id="last_name" name="last_name" value={trainer.last_name} onChange={handleChange} required />    
            
            <label for="fiscal_code">Codice fiscale</label>
            <input type="text" id="fiscal_code" name="fiscal_code" value={trainer.fiscal_code} onChange={handleChange} maxLength={16} required />
        
        </div>
    </div>
    <div class="buttons">
        <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Crea Allenatore"} />
        <Button buttonText="Annulla" onClick={() => navigate('/trainers')} />
    </div>
    </form>
    </div>
    );
    }

export default TrainerForm;