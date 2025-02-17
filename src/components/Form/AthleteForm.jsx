import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profilesService from "../../services/profiles/profilesService";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonUndo from "../Button/ButtonUndo";

function AthleteForm({ isEditMode = false, dataAthlete = {} }) {
  const navigate = useNavigate();

  // Set the initial state to empty array
  const [athlete, setAthlete] = useState([]);

  // Update the state when dataAthlete are available
  useEffect(() => {
    if (isEditMode && dataAthlete) {
      setAthlete(dataAthlete);
    }
  }, [isEditMode, dataAthlete]);

  // Categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const dataCategories = await profilesService.getCategories();
        setCategories(dataCategories);
      } catch (error) {
        console.error("Errore nel caricamento delle categorie:", error);
      }
    };
    fetchCategories();
  }, []);

  // Trainers
  // const [trainers, setTrainers] = useState(dataTrainers)

  // Update the state when fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAthlete((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the submit (create or update athlete)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await profilesService.updateAthlete(athlete.id, athlete);
        alert("Atleta aggiornato con successo!");
      } else {
        await profilesService.createAthlete(athlete);
        alert("Atleta creato con successo!");
      }
      navigate("/athletes");
    } catch (error) {
      console.error("Errore nel salvataggio dell'atleta: ", error);
      alert("Si è verificato un errore nel salvataggio dell'atleta.");
    }
  };

  // Hanlde the Undo operation
  const handleUndo = () => {
    navigate("/athletes");
  };

  return (
    <div className="container px-6 py-8 mx-auto max-w-240 text-gray-700 mt-4 tracking-wider">
      <div className="flex flex-col mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <form id="athletes-form" onSubmit={handleSubmit}>
            <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg 
          bg-white">
              <div
                className="p-3 opacity-95 bg-gray-700 text-[#E5E7EB] uppercase font-bold text-sm"
              >
                {isEditMode ? "Modifica Atleta" : "Inserimento Atleta"}
              </div>
              <div
                id="athletes-container"
                className="p-4 border-gray-300 rounded-md"
              >
                <div className="athletes-group">
                  <label className="block font-bold mb-3 text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={athlete.first_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3  text-gray-700">
                    Cognome
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={athlete.last_name}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                 bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3  text-gray-700">
                    Data di Nascita
                  </label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={athlete.date_of_birth}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3  text-gray-700">
                    Luogo di Nascita
                  </label>
                  <input
                    type="text"
                    name="place_of_birth"
                    value={athlete.place_of_birth}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3  text-gray-700">
                    Codice Fiscale
                  </label>
                  <input
                    type="text"
                    name="fiscal_code"
                    value={athlete.fiscal_code}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    maxLength={16}
                    required
                  />

                  <label className="block font-bold mb-3  text-gray-700">
                    Categoria
                  </label>
                  <select
                    name="category"
                    value={athlete.category}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleziona categoria</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.code} - {cat.description}
                      </option>
                    ))}
                  </select>
                  {/*
                  <label>Allenatore</label>
                    <select name="trainer" value={athlete.trainers} onChanGE={handleChange} required>
                      <option value="">Seleziona allenatore</option>
                        {trainers.map(trainer => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.first_name} {trainer.last_name}
                      </option>
                    </select>
                  */}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <div className="pl-1 w-full -mb-2">
                <ButtonInsert
                  type="submit"
                  buttonText={isEditMode ? "Salva Modifiche" : "Aggiungi Atleta"}
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

export default AthleteForm;

// Data Sample

/*
const dataCategories = [
    { id: 1, code: 'AM', description: 'Allievi Maschile' },
    { id: 2, code: 'AF', description: 'Allieve Femminile' },
    { id: 3, code: 'JM', description: 'Juniores Maschile' },
    { id: 4, code: 'JF', description: 'Juniores Femminile' },
    { id: 5, code: 'PM', description: 'Promesse Maschile' },
    { id: 6, code: 'PF', description: 'Promesse Femminile' },
    { id: 7, code: 'SM', description: 'Seniores Maschile' },
    { id: 8, code: 'SF', description: 'Seniores Femminile' }
];
*/

const dataTrainers = [
  {
    id: 1,
    first_name: "Luca",
    last_name: "Bianchi",
    fiscal_code: "LCABNC80A01H501Z",
  },
  {
    id: 2,
    first_name: "Marco",
    last_name: "Rossi",
    fiscal_code: "MRCRSS85B02F205Y",
  },
  {
    id: 3,
    first_name: "Giulia",
    last_name: "Verdi",
    fiscal_code: "GLVVRD90C03L219X",
  },
  {
    id: 4,
    first_name: "Francesca",
    last_name: "Neri",
    fiscal_code: "FRANER95D04T320W",
  },
  {
    id: 5,
    first_name: "Davide",
    last_name: "Moretti",
    fiscal_code: "DVDMRT99E05P123V",
  },
];
