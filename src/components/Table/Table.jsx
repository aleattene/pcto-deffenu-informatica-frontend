import React, {useState} from 'react';
import './Table.css';
import Button from '../Button/Button';

const headers_map = {
    id: "ID",
    first_name: "Nome",
    last_name: "Cognome",
    date_of_birth: "Data di Nascita",
    place_of_birth: "Luogo di Nascita",
    fiscal_code: "Codice Fiscale",
    category: "Categoria",
    vat_number: "Partita Iva",
    issue_date: "Data di Emissione",
    expiration_date: "Data di Scadenza",
    payment_date: "Data di Pagamento",
    amount: "importo"
}


function Table({data, actions}) {
    const [selectedId, setSelectedId] = useState(null);

    // Handler Selected Row
    const handleRowSelect = (id) => {
      setSelectedId(id);
      console.log(`Riga selezionata con ID: ${id}`);
    };
    

  return (
    <div id="table">
        <table>
            <thead id="table-thead">
              {/*
                <th> ID </th>
                <th> Nome </th>
                <th> Cognome </th>
                <th> Data di nascita  </th>
                <th> Luogo di nascita</th>
                <th> Codice fiscale </th>
                <th>Seleziona</th>
              */}
              {Object.keys(data[0]).map((key, idx) => (
                <th> {headers_map[key]} </th>
              ))}
              <th>Seleziona</th>
            </thead>
            <tbody>
                {/* Righe della tabella */}
                {data.map((item, index) => (
                <tr id="table-tr" key={index}>
                    
                    {Object.values(item).map((value, idx) => (
                    <td id="table-td" key={idx}>
                        {value}
                    </td>
                    ))}
                    <td id="table-td">
                <input
                  type="radio"
                  name="selectedRow"
                  value={item.id}
                  onChange={() => handleRowSelect(item.id)}
                />
              </td>
                </tr>
                ))}
            </tbody>
        </table> 
        {selectedId && <p>Hai selezionato la riga con ID: {selectedId} </p> }
        {selectedId && (
                <div id="table-actions">
                    {actions.map((action, idx) => (
                        <Button key={idx} buttonText={action.label} onClick={() => action.onClick(selectedId)} />
                    ))}
                </div>
            )}
    </div>
  );
}

export default Table;