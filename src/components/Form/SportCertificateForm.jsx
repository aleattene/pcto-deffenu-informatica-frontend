import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sportCertificatesService from "../../services/documentation/sportCertificatesService";
import profilesService from "../../services/profiles/profilesService";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonUndo from "../Button/ButtonUndo";

function SportCertificateForm({
  isEditMode = false,
  dataSportCertificate = {},
}) {
  const navigate = useNavigate();

  // SportDoctors
  const [sportDoctors, setSportDoctors] = useState([]);

  // Athletes
  const [athletes, setAthletes] = useState([]);

  // SportCertificates
  const [sportCertificate, setSportCertificate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve all athletes
        const dataAthletes = await profilesService.getAthletes();
        setAthletes(dataAthletes);

        // Retrieve all sport-doctors
        const dataSportDoctors = await profilesService.getSportDoctors();
        setSportDoctors(dataSportDoctors);
      } catch (error) {
        console.error(
          "Errore nel caricamento degli atleti o dei medici sportivi:",
          error,
        );
      }
    };

    fetchData();
  }, []);

  // Update the state when dataSportCertificate sare available
  useEffect(() => {
    if (isEditMode && dataSportCertificate) {
      setSportCertificate(dataSportCertificate);
    }
  }, [isEditMode, dataSportCertificate]);

  // Update the state when fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSportCertificate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the submit (create or update sportCertificate)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await sportCertificatesService.updateSportCertificate(
          sportCertificate.id,
          sportCertificate,
        );
        alert("Certificato Medico aggiornato con successo!");
      } else {
        await sportCertificatesService.createSportCertificate(sportCertificate);
        alert("Certificato Medico creato con successo!");
      }
      navigate("/sport-certificates");
    } catch (error) {
      console.error("Errore nel salvataggio del certificato medico: ", error);
      alert(
        "Si è verificato un errore nel salvataggio del certificato medico.",
      );
    }
  };

  // Hanlde the Undo operation
  const handleUndo = () => {
    navigate("/sport-certificates");
  };

  return (
    <div className="container px-6 py-8 mx-auto max-w-240 text-gray-700 mt-4 tracking-wider">
      <div className="flex flex-col mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <form id="sport-certificates-form" onSubmit={handleSubmit}>
            <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg 
          bg-white">
              <div
                className="p-3 opacity-95 bg-gray-700 text-[#E5E7EB] uppercase font-bold text-sm"
              >
                {isEditMode ? "Modifica Certificato Medico" : "Inserimento Certificato Medico"}
              </div>
              <div
                id="sport-certificates-container"
                className="p-4 border-gray-300 rounded-md"
              >
                <div className="sport-certificates-group">
                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="issue_date"
                  >
                    Data di Emissione
                  </label>
                  <input
                    type="date"
                    id="issue_date"
                    name="issue_date"
                    value={sportCertificate.issue_date}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="expiration_date"
                  >
                    Data di Scadenza
                  </label>
                  <input
                    type="date"
                    id="expiration_date"
                    name="expiration_date"
                    value={sportCertificate.expiration_date}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  />

                  <label className="block font-bold mb-3 text-gray-700">
                    Medico Sportivo
                  </label>
                  <select
                    name="sport_doctor"
                    value={sportCertificate.sport_doctor}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleziona medico</option>
                    {sportDoctors.map((sport_doctor) => (
                      <option key={sport_doctor.id} value={sport_doctor.id}>
                        {sport_doctor.first_name} {sport_doctor.last_name}
                      </option>
                    ))}
                  </select>
                  <label className="block font-bold mb-3 text-gray-700">
                    Atleta
                  </label>
                  <select
                    name="athlete"
                    value={sportCertificate.athlete}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-amber-200"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleziona atleta</option>
                    {athletes.map((athlete) => (
                      <option key={athlete.id} value={athlete.id}>
                        {athlete.first_name} {athlete.last_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <div className="pl-1 w-full -mb-2">
                <ButtonInsert
                  type="submit"
                  buttonText={isEditMode ? "Salva Modifiche" : "Aggiungi Certificato Medico"}
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

export default SportCertificateForm;

// DATA SAMPLE

/*
const dataSportDoctors = [
    { id: 1, first_name: "Antonio", last_name: "Salta", vat_number: "56478912547" },
    { id: 2, first_name: "Simone", last_name: "Balla", vat_number: "91256478547" },
    { id: 3, first_name: "Francesco", last_name: "Rosolino", vat_number: "89125475647" },
    { id: 4, first_name: "Francesca", last_name: "Mirandola", vat_number: "78956412547" },
    { id: 5, first_name: "Luca", last_name: "Antonelli", vat_number: "91254564787" }
]

const dataAthletes = [
    { id: 1, first_name: "Simone", last_name: "Salta" },
    { id: 2, first_name: "Simone", last_name: "Balla" },
    { id: 3, first_name: "Francesco", last_name: "Rosolino" },
    { id: 4, first_name: "Francesca", last_name: "Mirandola" },
    { id: 5, first_name: "Luca", last_name: "Antonelli" }
]
    */
