import React, {useState} from 'react';
import './Table.css';

function Table({data}) {
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
                <th> ID </th>
                <th> Nome </th>
                <th> Cognome </th>
                <th> Data di nascita  </th>
                <th> Luogo di nascita</th>
                <th> Codice fiscale </th>
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
        {selectedId && <p>Hai selezionato la riga con ID: {selectedId}</p>}
    </div>
  );
}

export default Table;