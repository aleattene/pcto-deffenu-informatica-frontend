import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profilesService from '../../services/profilesService';
import Button from '../Button/Button';
import './SportDoctorForm.css';

function SportDoctorForm({ isEditMode = false, dataSportDoctor = {} }) {

    const navigate = useNavigate();

    // Set the initial state to empty array
    const [sportDoctor, setSportDoctor] = useState([]);

    // Update the state when dataSportDoctor are available
    useEffect(() => {
        if (isEditMode && dataSportDoctor) {
            setSportDoctor(dataSportDoctor);
        }
    }, [isEditMode, dataSportDoctor]);

    // Update the state when fields change
    const handleChange = (event) => {
        const { name, value } = event.target;
        setSportDoctor(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle the submit (create or update sportDoctor)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isEditMode) {
                await profilesService.updateSportDoctor(sportDoctor.id, sportDoctor);
                alert("Medico Sportivo aggiornato con successo!");
            } else {
                await profilesService.createSportDoctor(sportDoctor);
                alert("Medico Sportivo creato con successo!");
            }
            navigate('/sport-doctors')
        } catch (error) {
            console.error("Errore nel salvataggio del medico sportivo: ", error);
            alert("Si è verificato un errore nel salvataggio del medico sportivo.");
        }
    };

    return (
        <div id="form-container">
            <h1>{isEditMode ? "Modifica Medico" : "Aggiungi Medico"}</h1>
            <form id="sport-doctors-form" onSubmit={handleSubmit}>
                <div id="sport-doctors-container">
                    <div class="sport-doctors-group">
                        <label>Nome</label>
                        <input type="text" name="first_name" value={sportDoctor.first_name} onChange={handleChange} required />

                        <label>Cognome</label>
                        <input type="text" name="last_name" value={sportDoctor.last_name} onChange={handleChange} required />

                        <label for="vat_number">Partita Iva</label>
                        <input type="text" id="vat_number" name="vat_number" value={sportDoctor.vat_number} onChange={handleChange} maxLength={11} required />

                    </div>
                </div>
                <div class="buttons">
                    <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Crea Medico"} />
                    <Button buttonText="Annulla" onClick={() => navigate('/sport-doctors')} /> </div>
            </form>
        </div>
    );
}

export default SportDoctorForm;