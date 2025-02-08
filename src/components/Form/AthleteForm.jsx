import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profilesService from '../../services/profilesService';
import Button from '../Button/Button';
import './AthleteForm.css';

function AthleteForm({ isEditMode = false }) {
    // const { id } = useParams();  // Recupera l'ID dalla URL se in modalità modifica
    const navigate = useNavigate();
    
    const [athlete, setAthlete] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        place_of_birth: '',
        fiscal_code: ''
    });

    // Se in modalità modifica, carica i dati dell'atleta selezionato
    /* useEffect(() => {
        if (isEditMode && id) {
            profilesService.getAthleteById(id)
                .then(response => setAthlete(response.data))
                .catch(error => console.error("Errore nel recupero atleta:", error));
        }
    }, [id, isEditMode]);
    */

    // Aggiorna lo stato quando cambiano i campi
    const handleChange = (e) => {
        //setAthlete({ ...athlete, [e.target.name]: e.target.value });
    };

    // Gestisce il submit (Crea o Modifica)
    const handleSubmit = (e) => {
        alert("Atleta Modificato con Successo!!!")
    /*
        e.preventDefault();
        if (isEditMode) {
            // MODIFICA Atleta
            profilesService.updateAthlete(id, athlete)
                .then(() => {
                    alert("Atleta aggiornato con successo!");
                    navigate('/athletes');
                })
                .catch(error => console.error("Errore nell'aggiornamento:", error));
        } else {
            // NUOVO Atleta
            profilesService.createAthlete(athlete)
                .then(() => {
                    alert("Atleta creato con successo!");
                    navigate('/athletes');
                })
                .catch(error => console.error("Errore nella creazione:", error));
        }
                */
    };

    return (
        <div id="form-container">
            <h1>{isEditMode ? "Modifica Atleta" : "Aggiungi Atleta"}</h1>
            <form id="athletes-form" onSubmit={handleSubmit}>
            <div id="athletes-container">
                <div className="athletes-group">
                    <label>Nome</label>
                    <input type="text" name="first_name" value={athlete.first_name} onChange={handleChange} required />

                    <label>Cognome</label>
                    <input type="text" name="last_name" value={athlete.last_name} onChange={handleChange} required />

                    <label>Data di Nascita</label>
                    <input type="date" name="date_of_birth" value={athlete.date_of_birth} onChange={handleChange} required />

                    <label>Luogo di Nascita</label>
                    <input type="text" name="place_of_birth" value={athlete.place_of_birth} onChange={handleChange} required />

                    <label>Codice Fiscale</label>
                    <input type="text" name="fiscal_code" value={athlete.fiscal_code} onChange={handleChange} required />
                </div>
                </div>
                <div className="buttons">
                    <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Crea Atleta"} />
                    <Button buttonText="Annulla" onClick={() => navigate('/athletes')} />
                </div>
            </form>
        </div>
    );
}

export default AthleteForm;
