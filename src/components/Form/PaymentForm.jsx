import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentsService from "../../services/paymentsService";
import profilesService from "../../services/profilesService";
import ButtonInsert from "../Button/ButtonInsert";
import ButtonUndo from "../Button/ButtonUndo";

function PaymentForm({ isEditMode = false, dataPayment = {} }) {
  const navigate = useNavigate();

  // Trainers
  const [trainers, setTrainers] = useState([]);

  // Payments
  const [payment, setPayment] = useState({
    payment_date: "",
    amount: "",
    trainer: "",
  });

  // Trainers
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chiamata API per ottenere trainers
        const dataTrainers = await profilesService.getTrainers();
        setTrainers(dataTrainers);
      } catch (error) {
        console.error("Errore nel caricamento degli allenatori:", error);
      }
    };

    fetchData();
  }, []);

  // Update the state when dataPayment are available
  useEffect(() => {
    if (isEditMode && dataPayment) {
      setPayment(dataPayment);
    }
  }, [isEditMode, dataPayment]);

  // Update the state when fields change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the submit (create or update payment)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await paymentsService.updatePayment(payment.id, payment);
        alert("Compenso aggiornato con successo!");
      } else {
        await paymentsService.createPayment(payment);
        alert("Compenso creato con successo!");
      }
      navigate("/payments");
    } catch (error) {
      console.error("Errore nel salvataggio del compenso: ", error);
      alert("Si è verificato un errore nel salvataggio del compenso.");
    }
  };

  // Hanlde the Undo operation
  const handleUndo = () => {
    navigate("/payments");
  };

  return (
    <div className="container px-6 py-8 mx-auto max-w-240 text-gray-700 mt-4">
      <div className="flex flex-col mb-4">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <form id="payments-form" onSubmit={handleSubmit}>
            <div className="inline-block min-w-full overflow-hidden align-middle shadow sm:rounded-lg 
          bg-white">
              <div
                className="p-3 opacity-95 bg-gray-700 text-[#E5E7EB] uppercase font-bold text-sm"
              >
                {isEditMode ? "Modifica Compenso" : "Inserimento Compenso"}
              </div>
              <div
                id="payments-container"
                className="p-4 border-gray-300 rounded-md"
              >
                <div className="payments-group">
                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="payment_date"
                  >
                    Data di Pagamento
                  </label>
                  <input
                    type="date"
                    id="payment_date"
                    name="payment_date"
                    value={payment.payment_date}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    onChange={handleChange}
                    required
                  />

                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="amount"
                  >
                    Importo
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={payment.amount}
                    className="w-full px-4 py-2 mb-4 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    required
                  />

                  <label
                    className="block font-bold mb-3 text-gray-700"
                    htmlFor="amount"
                  >
                    Allenatore
                  </label>
                  <select
                    name="trainer"
                    value={payment.trainer}
                    className="w-full px-4 py-2 mb-12 border border-gray-500 rounded-md
                                                  bg-gray-200 focus:bg-orange-200"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleziona allenatore</option>
                    {trainers.map((trainer) => (
                      <option key={trainer.id} value={trainer.id}>
                        {trainer.first_name} {trainer.last_name}
                      </option>
                    ))}s
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full gap-2">
              <div className="pl-1 w-full -mb-2">
                <ButtonInsert
                  type="submit"
                  buttonText={isEditMode ? "Salva Modifiche" : "Aggiungi Compenso"}
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
      </div>
    </div>
  );
}

export default PaymentForm;
