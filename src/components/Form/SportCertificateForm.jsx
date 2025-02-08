import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SportCertificateForm.css';
import Button from '../Button/Button';

function SportCertificateForm({isEditMode=false}) {

        // const { id } = useParams();  // Recupera l'ID dalla URL se in modalità modifica
        const navigate = useNavigate();
    
        const [sportCertificate, setSportCertificate] = useState({
            issue_date: '',
            expiration_date: '',
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
            alert("Certificato Medico Modificato con Successo!!!")
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
    <h1>{isEditMode ? "Modifica Certificato Medico" : "Aggiungi Certificato Medico"}</h1>
    <form id="sport-certificates-form">
    <div id="sport-certificates-container">
        <div class="sport-certificates-group">
            
            <label for="issue-date">Data di Emissione</label>
            <input type="text" id="ssue-date" name="ssue-date[]" required />  
            
            <label for="expiration-date">Data di Scadenza</label>
            <input type="text" id="expiration-date" name="expiration-date[]" required />
        
        </div>
    </div>
    <div class="buttons">
        <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Inserisci Certificato Medico"} />
        <Button buttonText="Annulla" onClick={() => navigate('/sport-certificates')} />
    </div>
    </form>
    </div>
    );
    }

export default SportCertificateForm;