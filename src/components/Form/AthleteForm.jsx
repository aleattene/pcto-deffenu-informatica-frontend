import React from 'react';
import './AthleteForm.css';
import Button from '../Button/Button';

function AthleteForm() {

return (
    <div id="form-container">
    <h1>Aggiungi Atleta</h1>
    <form id="athletes-form">
    <div id="athletes-container">
        <div class="athletes-group">
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome[]" required />
            
            <label for="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome[]" required />
            
            <label for="data-nascita">Data di nascita</label>
            <input type="date" id="data-nascita" name="data_nascita[]" required />
            
            <label for="luogo-nascita">Luogo di nascita</label>
            <input type="text" id="luogo-nascita" name="luogo_nascita[]" required />
            
            <label for="codice-fiscale">Codice fiscale</label>
            <input type="text" id="codice-fiscale" name="codice_fiscale[]" required />
        </div>
    </div>
    <div class="buttons">
        <Button id="add-athlete" buttonText="Aggiungi Altro Atleta" onClick={()=>{alert("Aggiungi Altro Atleta")}} />
        <Button id="submit-form" type="submit" buttonText="Invia" onClick={()=>{alert("Nuovo Atleta Inserito")}} />
    </div>
    </form>
    </div>
    );
    }

export default AthleteForm;