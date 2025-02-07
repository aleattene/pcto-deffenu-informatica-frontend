import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

function SportDoctors() {
  const navigate = useNavigate() 
  const data = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', vat_number: 'RSSMRA00A15H501Z' },
    { id: 2, nome: 'Giulia', cognome: 'Bianchi', vat_number: 'BNCGLI99E20F205Y' },
    { id: 3, nome: 'Luca', cognome: 'Verdi', vat_number: 'VRDLCU98C12F839L' },
    { id: 4, nome: 'Francesca', cognome: 'Neri', vat_number: 'NREFNC97L04L219Q' },
    { id: 5, nome: 'Alessandro', cognome: 'Ferrari', vat_number: 'FRRLSS95T25H501X' },
    { id: 6, nome: 'Valentina', cognome: 'Esposito', vat_number: 'SPSVLN02S30F205D' },
    { id: 7, nome: 'Andrea', cognome: 'Romano', vat_number: 'RMNAND01H18F839G' },
    { id: 8, nome: 'Sara', cognome: 'Costa', vat_number: 'CSTSRA00P10D969H' },
    { id: 9, nome: 'Federico', cognome: 'Lombardi', vat_number: 'LMBFRC98D22G224J' },
    { id: 10, nome: 'Martina', cognome: 'Ricci', vat_number: 'RCCMRT96B14C415S' },
  ];

  // const [sportDoctors, setSportDoctors] = useState([]);

  /*
  useEffect(() => {
    profilesService.getSportDoctors()
        .then((data) => setSportDoctors(data));
  }, []);
  */
  const handleClickSix = () => navigate('/sport-doctors/new')
  return (
    <div>
      <Dashboard 
        content={<Table data={data}/>}
        buttons={<Button buttonText="Insert Medico" onClick={handleClickSix} />}
      />
    </div>
  );
}

export default SportDoctors;