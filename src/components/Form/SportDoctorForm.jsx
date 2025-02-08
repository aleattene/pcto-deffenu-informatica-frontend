
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SportDoctorForm.css';
import Button from '../Button/Button';

function SportDoctorForm({isEditMode=false}) {
    // const { id } = useParams();  // Recupera l'ID dalla URL se in modalità modifica
    const navigate = useNavigate();
    
    const [sportDoctor, setSportDoctor] = useState({
        first_name: '',
        last_name: '',
        vat_number: ''
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
        alert("Medico Modificato con Successo!!!")
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
    <h1>{isEditMode ? "Modifica Medico" : "Aggiungi Medico"}</h1>
    <form id="sport-doctors-form">
    <div id="sport-doctors-container">
        <div class="sport-doctors-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome[]" required />

            <label for="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome[]" required />
            
            <label for="partita-iva">Partita Iva</label>
            <input type="text" id="partita-iva" name="partita-iva[]" required />
        
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