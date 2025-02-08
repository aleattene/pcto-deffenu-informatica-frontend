import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function SportDoctors() {
  const navigate = useNavigate() 
  const data = [
    { id: 1, first_name: 'Mario', last_name: 'Rossi', vat_number: 'RSSMRA00A15H501Z' },
    { id: 2, first_name: 'Giulia', last_name: 'Bianchi', vat_number: 'BNCGLI99E20F205Y' },
    { id: 3, first_name: 'Luca', last_name: 'Verdi', vat_number: 'VRDLCU98C12F839L' },
    { id: 4, first_name: 'Francesca', last_name: 'Neri', vat_number: 'NREFNC97L04L219Q' },
    { id: 5, first_name: 'Alessandro', last_name: 'Ferrari', vat_number: 'FRRLSS95T25H501X' },
    { id: 6, first_name: 'Valentina', last_name: 'Esposito', vat_number: 'SPSVLN02S30F205D' },
    { id: 7, first_name: 'Andrea', last_name: 'Romano', vat_number: 'RMNAND01H18F839G' },
    { id: 8, first_name: 'Sara', last_name: 'Costa', vat_number: 'CSTSRA00P10D969H' },
    { id: 9, first_name: 'Federico', last_name: 'Lombardi', vat_number: 'LMBFRC98D22G224J' },
    { id: 10, first_name: 'Martina', last_name: 'Ricci', vat_number: 'RCCMRT96B14C415S' },
  ];

  // const [sportDoctors, setSportDoctors] = useState([]);

  /*
  useEffect(() => {
    profilesService.getSportDoctors()
        .then((data) => setSportDoctors(data));
  }, []);
  */
  const handleClickSix = () => navigate('/sport-doctors/new')

    // Handler Modify Button
    const handleModifyButton = (selectedId) => {
    // alert(`Modifichiamo il Medico con ID: ${selectedId}`);
  	navigate(`/sport-doctors/edit/${selectedId}`)  
  };
  
    // Handler Delete Button
    const handleDeleteButton = (selectedId) => {
      alert(`Sicuro di Voler ELIMINARE il medico con ID: ${selectedId} ?`);
    };
  return (
    <div>
      <Dashboard 
                content={<Table 
                  data={data} 
                  actions ={[
                    {label:"Modifica Medico Selezionato", onClick: (selectedId) => handleModifyButton(selectedId)},
                    {label:"Elimina Medico Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId)}
                  ]}
                />}
        buttons={<Button buttonText="Inserisci Medico" onClick={handleClickSix} />}
      />
    </div>
  );
}

export default SportDoctors;