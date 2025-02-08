import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './TrainerForm.css';
import Button from '../Button/Button';
import { useNavigate, useParams } from 'react-router-dom';

function TrainerForm({isEditMode=false}) {

        // const { id } = useParams();  // Recupera l'ID dalla URL se in modalità modifica
        const navigate = useNavigate();
    
        const [trainer, setTrainer] = useState({
            first_name: '',
            last_name: '',
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
            alert("Allenatore Modificato con Successo!!!")
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
    <h1>{isEditMode ? "Modifica Allenatore" : "Aggiungi Allenatore"}</h1>
    <form id="trainers-form">
    <div id="trainers-container">
        <div class="trainers-group">
            
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome[]" required />
            
            <label for="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome[]" required />    
            
            <label for="codice-fiscale">Codice fiscale</label>
            <input type="text" id="codice-fiscale" name="codice_fiscale[]" required />
        
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