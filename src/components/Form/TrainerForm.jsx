import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilesService from "../../services/profilesService";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonUndo from "../Button/ButtonUndo";

function TrainerForm({ isEditMode = false, dataTrainer = {} }) {
  const navigate = useNavigate();

  // Set the initial state to empty array
  const [trainer, setTrainer] = useState([]);

  // Update the state when dataTrainer are available
  useEffect(() => {
    if (isEditMode && dataTrainer) {
      setTrainer(dataTrainer);
    }
  }, [isEditMode, dataTrainer]);

  // Update the state when fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTrainer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the submit (create or update trainer)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await profilesService.updateTrainer(trainer.id, trainer);
        alert("Allenatore aggiornato con successo!");
      } else {
        await profilesService.createTrainer(trainer);
        alert("Allenatore creato con successo!");
      }
      navigate("/trainers");
    } catch (error) {
      console.error("Errore nel salvataggio dell'allenatore: ", error);
      alert("Si è verificato un errore nel salvataggio dell'allenatore.");
    }
  };

  // Hanlde the Undo operation
  const handleUndo = () => {
    navigate("/trainers");
  };

  return (
    <div className="container px-6 py-8 mx-auto w-180">
      <h3 className="text-3xl font-semibold text-gray-900">
        {isEditMode ? "Modifica Allenatore" : "Aggiungi Allenatore"}
      </h3>
      <div className="flex flex-col mt-8 mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-gray-300 shadow sm:rounded-lg">
            <form id="trainers-form" onSubmit={handleSubmit}>
              <div
                id="trainers-container"
                className="border border-gray-300 p-4 rounded-md bg-[rgb(20,30,37)]"
              >
                <div className="trainers-group">
                  <label
                    className="block text-white font-bold mb-3"
                    for="first_name"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={trainer.first_name}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block text-white font-bold mb-3"
                    for="last_name"
                  >
                    Cognome
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={trainer.last_name}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block text-white font-bold mb-3"
                    for="fiscal_code"
                  >
                    Codice fiscale
                  </label>
                  <input
                    type="text"
                    id="fiscal_code"
                    name="fiscal_code"
                    value={trainer.fiscal_code}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 focus:bg-amber-100"
                    onChange={handleChange}
                    maxLength={16}
                    required
                  />

                  <ButtonInsert
                    type="submit"
                    buttonText={
                      isEditMode ? "Salva Modifiche" : "Aggiungi Allenatore"
                    }
                  />
                  <ButtonUndo buttonText="Annulla" onClick={handleUndo} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerForm;
