import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilesService from "../../services/profilesService";
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
    <div className="container px-6 py-8 mx-auto w-180">
      <h3 className="text-3xl font-semibold text-gray-900">
        {isEditMode ? "Modifica Medico Sportivo" : "Aggiungi Medico Sportivo"}
      </h3>
      <div className="flex flex-col mt-8 mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-gray-300 shadow sm:rounded-lg">
            <form id="sport-doctors-form" onSubmit={handleSubmit}>
              <div
                id="sport-doctors-container"
                className="border border-gray-300 p-4 rounded-md bg-[rgb(20,30,37)]"
              >
                <div className="sport-doctors-group">
                  <label className="block text-white font-bold mb-3">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={sportDoctor.first_name}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    required
                  />
                  <label className="block text-white font-bold mb-3">
                    Cognome
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={sportDoctor.last_name}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block text-white font-bold mb-3"
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
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    maxLength={11}
                    required
                  />
                </div>
                <ButtonInsert
                  type="submit"
                  buttonText={
                    isEditMode ? "Salva Modifiche" : "Aggiungi Medico Sportivo"
                  }
                />
                <ButtonUndo buttonText="Annulla" onClick={handleUndo} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportDoctorForm;
