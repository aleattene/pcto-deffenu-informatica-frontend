import React, { useState } from 'react';
import Button from '../Button/Button';
import './Table.css';

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
    amount: "importo",
    trainers: "Allenatore",
    trainer: "Allenatore"
}


function Table({ title, data, actions }) {
    const [selectedId, setSelectedId] = useState(null);

    // Handler Selected Row
    const handleRowSelect = (id) => {
        setSelectedId(id);
        console.log(`Riga selezionata con ID: ${id}`);
    };


    const formatValue = (key, value) => {
        if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
            const [year, month, day] = value.split("-");
            return `${day}/${month}/${year}`;
        }
        if (key === "amount") {
            return `€ ${Number(value).toFixed(2)}`;
        }
        return value;
    };

    return (
        <div id="table">
            <h1>{title}</h1>
            <table>
                <thead id="table-thead">
                    {data.length > 0 && Object.keys(data[0]).flatMap((key, idx) =>
                        idx === 1
                            ? [<th key={`select-${idx}`}>Seleziona</th>, <th key={idx}>{headers_map[key]}</th>]
                            : [<th key={idx}>{headers_map[key]}</th>]
                    )}

                </thead>
                <tbody>
                    {data.length > 0 && data.map((item, index) => (
                        <tr id="table-tr" key={index}>

                            {Object.entries(item).flatMap(([key, value], idx) =>
                                idx === 1
                                    ? [
                                        <td key={`radio-${item.id}`} id="table-td">
                                            <input
                                                type="radio"
                                                name="selectedRow"
                                                value={item.id}
                                                onChange={() => handleRowSelect(item.id)}
                                            />
                                        </td>,
                                        <td key={idx} id="table-td">{formatValue(key, value)}</td>
                                    ]
                                    : [<td key={idx} id="table-td">{formatValue(key, value)}</td>]
                            )}

                        </tr>
                    ))}
                </tbody>
            </table>
            {data.length < 1 && <p>Nessun Atleta Individuato. </p>}
            {/*selectedId && <p>Hai selezionato la riga con ID: {selectedId} </p>*/}
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