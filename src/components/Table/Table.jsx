import ButtonInsert from "../Button/ButtonInsert";

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
    <div className="w-full px-4 py-6 text-[#1F2937]">

      {isLoading &&
        <p className="text-xl font-medium text-white mb-8">
          Caricaremento dati in corso ...
        </p>}
      {
        !data.length && !isLoading && (
          <p className="text-xl font-medium text-white mb-8">
            Nessun {entity} individuato.
          </p>
        )
      }

      {!isLoading &&
        /* Table for XL Devices */
        <div className="hidden xl:block overflow-x-auto">
          {data.length > 0 &&
            <table className="min-w-full border border-gray-700">
              <thead className="bg-gray-700 text-white">
                <tr>
                  {Object.keys(data[0] || {}).map((key, idx) => (
                    <th key={idx} className="px-6 py-3 text-sm uppercase border-b text-center">
                      {headers_map[key]}
                    </th>
                  ))}
                  <th className="px-6 py-3 border-b"></th>
                  <th className="px-6 py-3 border-b"></th>
                </tr>
              </thead>
              <tbody className="bg-white opacity-90">
                {data.map((item, index) => (
                  <tr key={index} className="hover:bg-amber-200 font-semibold">
                    {Object.entries(item).map(([key, value], idx) => (
                      <td key={idx} className="px-6 py-4 border-b border-gray-300 text-center">
                        {formatValue(key, value)}
                      </td>
                    ))}
                    <td className="px-6 py-4 border-b border-gray-300 text-right">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={() =>
                          actions.find((action) => action.label.includes("Modifica"))?.onClick(item.id)
                        }
                      >
                        Modifica
                      </button>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-300 text-right">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() =>
                          actions.find((action) => action.label.includes("Elimina"))?.onClick(item.id)
                        }
                      >
                        Elimina
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
          <div className={
            entity === 'Atleta' || entity === 'Allenatore' || entity === 'Compenso'
              ? "w-60 mb-20"
              : "w-80 mb-20"
          }>
            <ButtonInsert
              buttonText={buttons[0].props?.buttonText}
              onClick={buttons[0].props?.onClick}
            />
          </div>
        </div>
      }

      {!isLoading &&
        /* Table for SM-MD-LG Devices */
        <div className="xl:hidden">
          {data.length > 0 &&
            data.map((item, index) => (
              <div
                key={index}
                className="mb-2 border border-gray-300 rounded shadow p-4 bg-gray-100"
              >
                {Object.entries(item).map(([key, value], idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between mb-2 ${idx === 0 ? 'bg-gray-700 text-white font-bold p-2 rounded' : ''
                      }`}
                  >
                    <span className="font-semibold">{headers_map[key]}:</span>
                    <span>{formatValue(key, value)}</span>
                  </div>
                ))}

                <div className="flex justify-end gap-2 mt-3">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() =>
                      actions.find((action) => action.label.includes("Modifica"))?.onClick(item.id)
                    }
                  >
                    Modifica
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                    onClick={() =>
                      actions.find((action) => action.label.includes("Elimina"))?.onClick(item.id)
                    }
                  >
                    Elimina
                  </button>
                </div>
              </div>
            ))
          }
          <div className="w-full">
            <ButtonInsert
              buttonText={buttons[0].props?.buttonText}
              onClick={buttons[0].props?.onClick}
            />
          </div>
        </div >
      }
    </div>
  );
}

export default Table;
