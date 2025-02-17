import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilesService from "../../services/profiles/profilesService";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonUndo from "../Button/ButtonUndo";

function SportDoctorForm({ isEditMode = false, dataSportDoctor = {} }) {
  const navigate = useNavigate();

  // Set the initial state to empty array
  const [sportDoctor, setSportDoctor] = useState([]);

  // Update the state when dataSportDoctor are available
  useEffect(() => {
    if (isEditMode && dataSportDoctor) {
      setSportDoctor(dataSportDoctor);
    }
  }, [isEditMode, dataSportDoctor]);

  // Update the state when fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSportDoctor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the submit (create or update sportDoctor)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await profilesService.updateSportDoctor(sportDoctor.id, sportDoctor);
        alert("Medico Sportivo aggiornato con successo!");
      } else {
        await profilesService.createSportDoctor(sportDoctor);
        alert("Medico Sportivo creato con successo!");
      }
      navigate("/sport-doctors");
    } catch (error) {
      console.error("Errore nel salvataggio del medico sportivo: ", error);
      alert("Si è verificato un errore nel salvataggio del medico sportivo.");
    }
  };

  // Hanlde the Undo operation
  const handleUndo = () => {
    navigate("/sport-doctors");
  };

  return (
    <div className="container px-6 py-8 mx-auto max-w-240 text-gray-700 mt-4 tracking-wider">
      <div className="flex flex-col mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <form id="sport-doctors-form" onSubmit={handleSubmit}>
            <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg 
          bg-white">
              <div
                className="p-3 opacity-95 bg-gray-700 text-[#E5E7EB] uppercase font-bold text-sm"
              >
                {isEditMode ? "Modifica Medico Sportivo" : "Inserimento Medico Sportivo"}
              </div>
              <div
                id="sport-doctors-container"
                className="p-4 border-gray-300 rounded-md"
              >
                <div className="sport-doctors-group">
                  <label className="block font-bold mb-3 text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={sportDoctor.first_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />
                  <label className="block font-bold mb-3 text-gray-700">
                    Cognome
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={sportDoctor.last_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3 text-gray-700"
                    htmlFor="vat_number"
                  >
                    Partita Iva
                  </label>
                  <input
                    type="text"
                    id="vat_number"
                    name="vat_number"
                    value={sportDoctor.vat_number}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    maxLength={11}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <div className="pl-1 w-full -mb-2">
                <ButtonInsert
                  type="submit"
                  buttonText={isEditMode ? "Salva Modifiche" : "Aggiungi Medico Sportivo"}
                  className="w-full sm:w-auto"
                />
              </div>
              <div className="pl-1 w-full">
                <ButtonUndo
                  buttonText="Annulla"
                  onClick={handleUndo}
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}

export default SportDoctorForm;
