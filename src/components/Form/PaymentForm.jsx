import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PaymentForm.css';
import Button from '../Button/Button';

function TrainerForm({isEditMode=false}) {

        // const { id } = useParams();  // Recupera l'ID dalla URL se in modalità modifica
        const navigate = useNavigate();
    
        const [payment, setPayment] = useState({
            payment_date: '',
            amount: '',
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
            alert("Compenso Modificato con Successo!!!")
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
    <h1>{isEditMode ? "Modifica Compenso" : "Aggiungi Compenso"}</h1>
    <form id="payments-form">
    <div id="payments-container">
        <div class="payments-group">
            
            <label for="payment-date">Data di Pagamento</label>
            <input type="text" id="payment-date" name="payment-date[]" required />  
            
            <label for="amount">Importo</label>
            <input type="text" id="amount" name="amount[]" required />
        
        </div>
    </div>
    <div class="buttons">
        <Button type="submit" buttonText={isEditMode ? "Salva Modifiche" : "Crea Compenso"} />
        <Button buttonText="Annulla" onClick={() => navigate('/payments')} />
    </div>
    </form>
    </div>
    );
    }

export default TrainerForm;