import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function SportCertifcates() {

  const navigate = useNavigate() 

  
  const data = [
    { id: 1, issue_date: '2000-01-15', expiration_date: '2000-01-15' },
    { id: 2, issue_date: '1999-05-20', expiration_date: '1999-05-20' },
    { id: 3, issue_date: '1998-03-12', expiration_date: '2000-01-15' },
    { id: 4, issue_date: '1997-07-04', expiration_date: '2000-01-15' },
    { id: 5, issue_date: '1995-12-25', expiration_date: '2000-01-15' },
    { id: 6, issue_date: '2002-11-30', expiration_date: '2000-01-15' },
    { id: 7, issue_date: '2001-06-18', expiration_date: '2000-01-15' },
    { id: 8, issue_date: '2000-09-10', expiration_date: '2000-01-15' },
    { id: 9, issue_date: '1998-04-22', expiration_date: '2000-01-15' },
    { id: 10, issue_date: '1996-02-14', expiration_date: '2000-01-15' },
  ];



  //const [athletes, setAthletes] = useState([]);

  // useEffect(() => {
  //  profilesService.getAthletes()
  //      .then((data) => setAthletes(data));
  // }, []);
  const handleClickFour = () => navigate('/sport-certificates/new')

  // Handler Modify Button
  const handleModifyButton = (selectedId) => {
	navigate(`/sport-certificates/edit/${selectedId}`)
    //alert(`Modifichiamo Atleta con ID: ${selectedId}`);
  };

  // Handler Delete Button
  const handleDeleteButton = (selectedId) => {
    alert(`Sicuro di Voler ELIMINARE il Certificato Medico con ID: ${selectedId} ?`);
  };
  

  return (
    <div>
      <Dashboard 
        content={<Table 
          title="Elenco Certificati Medici"
          data={data} 
          actions ={[
            {label:"Modifica Certificato Medico Selezionato", onClick: (selectedId) => handleModifyButton(selectedId)},
            {label:"Elimina Certificato Medico Selezionato", onClick: (selectedId) => handleDeleteButton(selectedId)}
          ]}
        />}
        buttons={<Button buttonText="Inserisci Certificato Medico" onClick={handleClickFour} />}
      />
    </div>
  );
}

export default SportCertifcates;