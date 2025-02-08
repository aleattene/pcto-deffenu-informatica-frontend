import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function Payments() {

  const navigate = useNavigate() 

  
  const data = [
    { id: 1, payment_date: '2000-01-15', amount: 150.00 },
    { id: 2, payment_date: '1999-05-20', amount: 170.00 },
    { id: 3, payment_date: '1998-03-12', amount: 150.25 },
    { id: 4, payment_date: '1997-07-04', amount: 80.00 },
    { id: 5, payment_date: '1995-12-25', amount: 33.75 },
    { id: 6, payment_date: '2002-11-30', amount: 201.00 },
    { id: 7, payment_date: '2001-06-18', amount: 200.00 },
    { id: 8, payment_date: '2000-09-10', amount: 30.00 },
    { id: 9, payment_date: '1998-04-22', amount: 60.00 },
    { id: 10, payment_date: '1996-02-14', amount: 999.00 },
  ];



  //const [athletes, setAthletes] = useState([]);

  // useEffect(() => {
  //  profilesService.getAthletes()
  //      .then((data) => setAthletes(data));
  // }, []);
  const handleClickFour = () => navigate('/payments/new')

  // Handler Modify Button
  const handleModifyButton = (selectedId) => {
	navigate(`/payments/edit/${selectedId}`)
    //alert(`Modifichiamo Atleta con ID: ${selectedId}`);
  };

  // Handler Delete Button
  const handleDeleteButton = (selectedId) => {
    alert(`Sicuro di Voler ELIMINARE il Compenso con ID: ${selectedId} ?`);
  };
  

  return (
    <div>
      <Dashboard 
        content={<Table 
          title="Elenco Compensi"
          data={data} 
          actions ={[
            {label:"Modifica Compenso Selezionato", onClick: (selectedId) => handleModifyButton(selectedId)},
            {label:"Elimina Compenso Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId)}
          ]}
        />}
        buttons={<Button buttonText="Inserisci Compenso" onClick={handleClickFour} />}
      />
    </div>
  );
}

export default Payments;