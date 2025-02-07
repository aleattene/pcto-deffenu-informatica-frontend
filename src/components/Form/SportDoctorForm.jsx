import React from 'react';
import './SportDoctorForm.css';
import Button from '../Button/Button';

function SportDoctorForm() {

return (
    <div id="form-container">
    <h1>Aggiungi Medico</h1>
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
        <Button id="add-sport-doctor" buttonText="Aggiungi Altro Medico" onClick={()=>{alert("Aggiungi Altro Medico")}} />
        <Button id="submit-form" type="submit" buttonText="Invia" onClick={()=>{alert("Nuovo Medico Inserito")}} />
    </div>
    </form>
    </div>
    );
    }

export default SportDoctorForm;