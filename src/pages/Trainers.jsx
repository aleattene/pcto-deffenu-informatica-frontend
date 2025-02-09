import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function Trainers() {
  
  const navigate = useNavigate() 

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
        try {
            const data = await profilesService.getTrainers();
            setTrainers(data);
        } catch (error) {
            console.error("Errore nel recupero degliallenatori:", error);
        }
    };

    fetchTrainers();
}, []);

  const handleClickFive = () => navigate('/trainers/new')

    // Handler Modify Button
    const handleModifyButton = (selectedId) => {
    //alert(`Modifichiamo Allenatore con ID: ${selectedId}`);
    navigate(`/trainers/edit/${selectedId}`)
  };
  
    // Handler Delete Button
    const handleDeleteButton = async (selectedId) => {
      const isConfirmed = window.confirm(`Sei sicuro di voler eliminare l'allenatore con ID: ${selectedId}?`);
  
      if (isConfirmed) {
        try {
          await profilesService.deleteTrainer(selectedId);
          alert("Allenatore eliminato con successo!");
          const updatedTrainers = await profilesService.getTrainers();
          setTrainers(updatedTrainers);
  
        } catch (error) {
          console.error("Errore durante l'eliminazione:", error);
          alert("Errore durante l'eliminazione dell'allenatore.");
        }
      }
    };


  return (
    <div>
      <Dashboard 
        content={<Table
          title="Elenco Allenatori" 
          data={trainers} 
          actions ={[
            {label:"Modifica Allenatore Selezionato", onClick: (selectedId) => handleModifyButton(selectedId)},
            {label:"Elimina Allenatore Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId)}
          ]}
        />}
        buttons={<Button buttonText="Inserisci Allenatore" onClick={handleClickFive} />}
      />
    </div>
  );
}

export default Trainers;


 // DATA Sample

 const data = [
    { id: 1, first_name: 'Mario', last_name: 'Rossi', fiscal_code: 'RSSMRA00A15H501Z' },
    { id: 2, first_name: 'Giulia', last_name: 'Bianchi', fiscal_code: 'BNCGLI99E20F205Y' },
    { id: 3, first_name: 'Luca', last_name: 'Verdi', fiscal_code: 'VRDLCU98C12F839L' },
    { id: 4, first_name: 'Francesca', last_name: 'Neri', fiscal_code: 'NREFNC97L04L219Q' },
    { id: 5, first_name: 'Alessandro', last_name: 'Ferrari', fiscal_code: 'FRRLSS95T25H501X' },
    { id: 6, first_name: 'Valentina', last_name: 'Esposito', fiscal_code: 'SPSVLN02S30F205D' },
    { id: 7, first_name: 'Andrea', last_name: 'Romano', fiscal_code: 'RMNAND01H18F839G' },
    { id: 8, first_name: 'Sara', last_name: 'Costa', fiscal_code: 'CSTSRA00P10D969H' },
    { id: 9, first_name: 'Federico', last_name: 'Lombardi', fiscal_code: 'LMBFRC98D22G224J' },
    { id: 10, first_name: 'Martina', last_name: 'Ricci', fiscal_code: 'RCCMRT96B14C415S' },
  ];