import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function Athletes() {

  const navigate = useNavigate() 

  
  const data = [
    { id: 1, first_name: 'Mario', last_name: 'Rossi', date_of_birth: '2000-01-15', place_of_birth: 'Roma', fiscal_code: 'RSSMRA00A15H501Z' },
    { id: 2, first_name: 'Giulia', last_name: 'Bianchi', date_of_birth: '1999-05-20', place_of_birth: 'Milano', fiscal_code: 'BNCGLI99E20F205Y' },
    { id: 3, first_name: 'Luca', last_name: 'Verdi', date_of_birth: '1998-03-12', place_of_birth: 'Napoli', fiscal_code: 'VRDLCU98C12F839L' },
    { id: 4, first_name: 'Francesca', last_name: 'Neri', date_of_birth: '1997-07-04', place_of_birth: 'Torino', fiscal_code: 'NREFNC97L04L219Q' },
    { id: 5, first_name: 'Alessandro', last_name: 'Ferrari', date_of_birth: '1995-12-25', place_of_birth: 'Firenze', fiscal_code: 'FRRLSS95T25H501X' },
    { id: 6, first_name: 'Valentina', last_name: 'Esposito', date_of_birth: '2002-11-30', place_of_birth: 'Bologna', fiscal_code: 'SPSVLN02S30F205D' },
    { id: 7, first_name: 'Andrea', last_name: 'Romano', date_of_birth: '2001-06-18', place_of_birth: 'Venezia', fiscal_code: 'RMNAND01H18F839G' },
    { id: 8, first_name: 'Sara', last_name: 'Costa', date_of_birth: '2000-09-10', place_of_birth: 'Genova', fiscal_code: 'CSTSRA00P10D969H' },
    { id: 9, first_name: 'Federico', last_name: 'Lombardi', date_of_birth: '1998-04-22', place_of_birth: 'Perugia', fiscal_code: 'LMBFRC98D22G224J' },
    { id: 10, first_name: 'Martina', last_name: 'Ricci', date_of_birth: '1996-02-14', place_of_birth: 'Cagliari', fiscal_code: 'RCCMRT96B14C415S' },
  ];



  //const [athletes, setAthletes] = useState([]);

  // useEffect(() => {
  //  profilesService.getAthletes()
  //      .then((data) => setAthletes(data));
  // }, []);
  const handleClickFour = () => navigate('/athletes/new')

  // Handler Modify Button
  const handleModifyButton = (selectedId) => {
    alert(`Modifichiamo Atleta con ID: ${selectedId}`);
  };

  // Handler Delete Button
  const handleDeleteButton = (selectedId) => {
    alert(`Sicuro di Voler ELIMINARE l'atleta con ID: ${selectedId} ?`);
  };
  

  return (
    <div>
      <Dashboard 
        content={<Table 
          data={data} 
          actions ={[
            {label:"Modifica Atleta Selezionato", onClick: (selectedId) => handleModifyButton(selectedId)},
            {label:"Elimina Atleta Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId)}
          ]}
        />}
        buttons={<Button buttonText="Inserisci Atleta" onClick={handleClickFour} />}
      />
    </div>
  );
}

export default Athletes;