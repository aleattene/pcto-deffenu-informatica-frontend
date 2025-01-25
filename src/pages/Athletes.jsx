import React, { useState, useEffect } from 'react';
import profilesService from '../services/profilesService';
import Dashboard from '../components/Dashboard/Dashboard';
import Table from '../components/Table/Table';
import Button from '../components/Button/Button';

function Athletes() {

  
  const data = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', data_nascita: '2000-01-15', luogo_nascita: 'Roma', codice_fiscale: 'RSSMRA00A15H501Z' },
    { id: 2, nome: 'Giulia', cognome: 'Bianchi', data_nascita: '1999-05-20', luogo_nascita: 'Milano', codice_fiscale: 'BNCGLI99E20F205Y' },
    { id: 3, nome: 'Luca', cognome: 'Verdi', data_nascita: '1998-03-12', luogo_nascita: 'Napoli', codice_fiscale: 'VRDLCU98C12F839L' },
    { id: 4, nome: 'Francesca', cognome: 'Neri', data_nascita: '1997-07-04', luogo_nascita: 'Torino', codice_fiscale: 'NREFNC97L04L219Q' },
    { id: 5, nome: 'Alessandro', cognome: 'Ferrari', data_nascita: '1995-12-25', luogo_nascita: 'Firenze', codice_fiscale: 'FRRLSS95T25H501X' },
    { id: 6, nome: 'Valentina', cognome: 'Esposito', data_nascita: '2002-11-30', luogo_nascita: 'Bologna', codice_fiscale: 'SPSVLN02S30F205D' },
    { id: 7, nome: 'Andrea', cognome: 'Romano', data_nascita: '2001-06-18', luogo_nascita: 'Venezia', codice_fiscale: 'RMNAND01H18F839G' },
    { id: 8, nome: 'Sara', cognome: 'Costa', data_nascita: '2000-09-10', luogo_nascita: 'Genova', codice_fiscale: 'CSTSRA00P10D969H' },
    { id: 9, nome: 'Federico', cognome: 'Lombardi', data_nascita: '1998-04-22', luogo_nascita: 'Perugia', codice_fiscale: 'LMBFRC98D22G224J' },
    { id: 10, nome: 'Martina', cognome: 'Ricci', data_nascita: '1996-02-14', luogo_nascita: 'Cagliari', codice_fiscale: 'RCCMRT96B14C415S' },
  ];
  /*
    { id: 11, nome: 'Simone', cognome: 'Barbieri', data_nascita: '1999-01-30', luogo_nascita: 'Ancona', codice_fiscale: 'BRBSMN99A30A271U' },
    { id: 12, nome: 'Chiara', cognome: 'Fontana', data_nascita: '2003-08-05', luogo_nascita: 'Trieste', codice_fiscale: 'FNTCHR03M05E829P' },
    { id: 13, nome: 'Daniele', cognome: 'Moretti', data_nascita: '1997-12-08', luogo_nascita: 'Rimini', codice_fiscale: 'MRTDNL97T08H501C' },
    { id: 14, nome: 'Giorgia', cognome: 'Santini', data_nascita: '1995-05-17', luogo_nascita: 'Arezzo', codice_fiscale: 'SNTGRG95E17D969N' },
    { id: 15, nome: 'Matteo', cognome: 'Pellegrini', data_nascita: '2000-03-23', luogo_nascita: 'Salerno', codice_fiscale: 'PLLMNT00C23G224W' },
    { id: 16, nome: 'Elisa', cognome: 'Conti', data_nascita: '2002-07-29', luogo_nascita: 'Bari', codice_fiscale: 'CNTELS02L29A662K' },
    { id: 17, nome: 'Paolo', cognome: 'Galli', data_nascita: '1998-10-19', luogo_nascita: 'Trento', codice_fiscale: 'GLLPLA98R19E863L' },
    { id: 18, nome: 'Anna', cognome: 'Serra', data_nascita: '1996-01-02', luogo_nascita: 'Palermo', codice_fiscale: 'SRRNNA96A02G273H' },
    { id: 19, nome: 'Emanuele', cognome: 'Ruggieri', data_nascita: '1999-06-13', luogo_nascita: 'Modena', codice_fiscale: 'RGGMNL99H13F257M' },
    { id: 20, nome: 'Beatrice', cognome: 'Martini', data_nascita: '1997-09-28', luogo_nascita: 'Bolzano', codice_fiscale: 'MRTBRC97P28A952V' },
  ];
  */



  //const [athletes, setAthletes] = useState([]);

  // useEffect(() => {
  //  profilesService.getAthletes()
  //      .then((data) => setAthletes(data));
  // }, []);

  return (
    <div>
      <Dashboard content={<Table data={data}/>
        }/>
    </div>
  );
}

export default Athletes;