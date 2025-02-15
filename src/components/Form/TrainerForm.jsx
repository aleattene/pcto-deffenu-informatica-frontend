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
    <div className="container px-6 py-8 mx-auto max-w-240 text-gray-700 mt-4">
      <div className="flex flex-col mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <form id="athletes-form" onSubmit={handleSubmit}>
            <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg 
          bg-white">
              <div
                className="p-3 opacity-95 bg-gray-700 text-[#E5E7EB] uppercase font-bold text-sm"
              >
                {isEditMode ? "Modifica Allenatore" : "Inserimento Allenatore"}
              </div>

              <div
                id="trainers-container"
                className="p-4 border-gray-300 rounded-md"
              >
                <div className="trainers-group">
                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="first_name"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={trainer.first_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="last_name"
                  >
                    Cognome
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={trainer.last_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="fiscal_code"
                  >
                    Codice fiscale
                  </label>
                  <input
                    type="text"
                    id="fiscal_code"
                    name="fiscal_code"
                    value={trainer.fiscal_code}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    onChange={handleChange}
                    maxLength={16}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <div className="pl-1 w-full -mb-2">
                <ButtonInsert
                  type="submit"
                  buttonText={isEditMode ? "Salva Modifiche" : "Aggiungi Allenatore"}
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

export default TrainerForm;
