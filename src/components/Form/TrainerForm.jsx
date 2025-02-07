import React from 'react';
import './TrainerForm.css';
import Button from '../Button/Button';

function TrainerForm() {

return (
    <div id="form-container">
    <h1>Aggiungi Allenatore</h1>
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
        <Button id="add-trainers" buttonText="Aggiungi Altro Allenatore" onClick={()=>{alert("Aggiungi Altro Allenatore")}} />
        <Button id="submit-form" type="submit" buttonText="Invia" onClick={()=>{alert("Nuovo Allenatore Inserito")}} />
    </div>
    </form>
    </div>
    );
    }

export default TrainerForm;