import { useState } from "react";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonDelete from "../Button/ButtonDelete";
import ButtonModify from "../Button/ButtonModify";

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
  trainer: "Allenatore",
  athlete: "Atleta",
  sport_doctor: "Medico Sportivo",
};

function Table({ title, data = [], isLoading, buttons, entity, actions }) {
  
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
    <div className="container px-6 py-8 text-[#1F2937]">
      {/* <h3 className="text-xl font-semibold text-[#FFFFFF] uppercase">{title}</h3>*/}
      <div className="flex flex-col mt-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-gray-50 shadow sm:rounded-lg bg-[#FFFFFF] opacity-90">
            {data.length > 0 && (
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-700 text-[#E5E7EB]">
                    {Object.keys(data[0]).map((key, idx) => {
                      return (
                        <th
                          className="px-6 py-3 text-xs leading-4 tracking-wider text-left font-bold uppercase border-b border-gray-200"
                          key={idx}
                        >
                          {headers_map[key]}
                        </th>
                      );
                    })}
                    <th className="px-6 py-3 border-b border-gray-200"></th>
                    <th className="px-6 py-3 border-b border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 &&
                    data.map((item, index) => (
                      <tr
                        id="table-tr"
                        key={index}
                        className="hover:bg-cyan-600 hover:text-white"
                      >
                        {Object.entries(item).flatMap(([key, value], idx) => (
                          <td
                            className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                            key={idx}
                            id="table-td"
                          >
                            <div className="text-md leading-8 font-semibold">
                              {formatValue(key, value)}
                            </div>
                          </td>
                        ))}
                        <td className="py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200 text-gray-700">
                          <ButtonModify
                            buttonText="Modifica"
                            onClick={() => {
                              const modifyAction = actions.find((action) =>
                                action.label.includes("Modifica"),
                              );
                              if (modifyAction) {
                                modifyAction.onClick(item.id);
                              }
                            }}
                          />
                        </td>
                        <td className="py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200 text-gray-700">
                          <ButtonDelete
                            buttonText="Elimina"
                            onClick={() => {
                              const deleteAction = actions.find((action) =>
                                action.label.includes("Elimina"),
                              );
                              if (deleteAction) {
                                deleteAction.onClick(item.id);
                              }
                            }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/*selectedId && <p>Hai selezionato la riga con ID: {selectedId} </p>*/}
            {/*selectedId && (
                            <div id="table-actions">
                                {actions.map((action, idx) => (
                                    <Button key={idx} buttonText={action.label} onClick={() => action.onClick(selectedId)} />
                                ))}
                            </div>
                        )*/}
          </div>
        </div>
      </div>
      {isLoading && 
      <p className="text-xl font-medium text-white mb-8">
          Caricaremento dati in corso ...
        </p>}
      {!data.length && !isLoading && (
        <p className="text-xl font-medium text-white mb-8">
          Nessun {entity} individuato.
        </p>
      )}
      {!isLoading &&
        buttons.map((button, idx) => (
          <ButtonInsert
            key={idx}
            buttonText={button.props.buttonText}
            onClick={button.props.onClick}
          />
        ))}
    </div>
  );
}

export default Table;

/*
<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    <div className="flex items-center">
        <div className="flex-shrink-0 w-10 h-10">
        </div>
    </div>
</td>

<div className="ml-4">
    <div className="text-sm font-medium leading-5 text-gray-900">John Doe</div>
    <div className="text-sm leading-5 text-gray-500">john@example.com</div>
</div>
*/
