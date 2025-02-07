import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function Trainers() {
  const navigate = useNavigate() 
  const data = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', codice_fiscale: 'RSSMRA00A15H501Z' },
    { id: 2, nome: 'Giulia', cognome: 'Bianchi', codice_fiscale: 'BNCGLI99E20F205Y' },
    { id: 3, nome: 'Luca', cognome: 'Verdi', codice_fiscale: 'VRDLCU98C12F839L' },
    { id: 4, nome: 'Francesca', cognome: 'Neri', codice_fiscale: 'NREFNC97L04L219Q' },
    { id: 5, nome: 'Alessandro', cognome: 'Ferrari', codice_fiscale: 'FRRLSS95T25H501X' },
    { id: 6, nome: 'Valentina', cognome: 'Esposito', codice_fiscale: 'SPSVLN02S30F205D' },
    { id: 7, nome: 'Andrea', cognome: 'Romano', codice_fiscale: 'RMNAND01H18F839G' },
    { id: 8, nome: 'Sara', cognome: 'Costa', codice_fiscale: 'CSTSRA00P10D969H' },
    { id: 9, nome: 'Federico', cognome: 'Lombardi', codice_fiscale: 'LMBFRC98D22G224J' },
    { id: 10, nome: 'Martina', cognome: 'Ricci', codice_fiscale: 'RCCMRT96B14C415S' },
  ];
    /*
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    profilesService.getTrainers()
        .then((data) => setTrainers(data));
  }, []);
 */
  const handleClickFive = () => navigate('/trainers/new')
  return (
    <div>
      <Dashboard 
        content={<Table data={data}/>}
        buttons={<Button buttonText="Insert Allenatore" onClick={handleClickFive} />}
      />
    </div>
  );
}

export default Trainers;