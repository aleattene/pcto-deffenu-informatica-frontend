import React from 'react';
import './Form.css';
import Button from '../Button/Button';

function Form() {

/*unction addAthlete() {
    const container = document.getElementById('athletes-container');
    const newGroup = document.createElement('div');
    newGroup.classList.add('athlete-group');
    newGroup.innerHTML = `
        <label for="nome">Nome</label>
        <input type="text" name="nome[]" required>
        
        <label for="cognome">Cognome</label>
        <input type="text" name="cognome[]" required>
        
        <label for="data-nascita">Data di nascita</label>
        <input type="date" name="data_nascita[]" required>
        
        <label for="luogo-nascita">Luogo di nascita</label>
        <input type="text" name="luogo_nascita[]" required>
        
        <label for="codice-fiscale">Codice fiscale</label>
        <input type="text" name="codice_fiscale[]" required>
    `;
    container.appendChild(newGroup);
}
    */

return (
    <div id="form-container">
    <h1>Aggiungi Atleta</h1>
    <form id="athletes-form">
    <div id="athletes-container">
        <div class="athlete-group">
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
        <Button id="submit-form" type="submi" buttonText="Invia" onClick={()=>{alert("Nuovo Atleta Inserito")}} />
    </div>
    </form>
    </div>
    );
    }

export default Form;