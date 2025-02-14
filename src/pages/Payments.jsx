import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import paymentsService from "../services/paymentsService";
import ButtonInsert from "../components/Button/ButtonInsert";
import Dashboard from "../components/Dashboard/Dashboard";
import PageLayout from "../components/Layout/PageLayout";

function Payments() {
  const navigate = useNavigate();

  // Payments
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const dataPayments = await paymentsService.getPayments();
        setPayments(dataPayments);
      } catch (error) {
        console.error("Errore nel recupero dei Compensi:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handleClickFour = () => navigate("/payments/new");

  // Handler Modify Button
  const handleModifyButton = (selectedId) => {
    navigate(`/payments/edit/${selectedId}`);
  };

  // Handler Delete Button
  const handleDeleteButton = async (selectedId) => {
    const isConfirmed = window.confirm(
      `Sei sicuro di voler eliminare il compenso con ID: ${selectedId}?`,
    );

    if (isConfirmed) {
      try {
        await paymentsService.deletePayment(selectedId);
        alert("Compenso eliminato con successo!");
        const updatedPayments = await paymentsService.getPayments();
        setPayments(updatedPayments);
      } catch (error) {
        console.error("Errore durante l'eliminazione:", error);
        alert("Errore durante l'eliminazione del compenso.");
      }
    }
  };

  return (
    <div x-data="{ sidebarOpen: false }" className="flex h-screen bg-gray-200">
      <PageLayout>
        <Dashboard
          titleTable="Elenco Compensi"
          isLoading={isLoading}
          dataTable={payments}
          actions={[
            {
              label: "Modifica Compenso Selezionato",
              onClick: (selectedId) => handleModifyButton(selectedId),
            },
            {
              label: "Elimina Compenso Selezionato",
              onClick: (selectedId) => handleDeleteButton(selectedId),
            },
          ]}
          buttons={[
            <ButtonInsert
              buttonText="Aggiungi Compenso"
              onClick={handleClickFour}
            />,
          ]}
          entity="Compenso"
        />
      </PageLayout>
    </div>
  );
}

export default Payments;

// DATA Sample

/*
const data = [
  { id: 1, payment_date: '2000-01-15', amount: 150.00 },
  { id: 2, payment_date: '1999-05-20', amount: 170.00 },
  { id: 3, payment_date: '1998-03-12', amount: 150.25 },
  { id: 4, payment_date: '1997-07-04', amount: 80.00 },
  { id: 5, payment_date: '1995-12-25', amount: 33.75 },
  { id: 6, payment_date: '2002-11-30', amount: 201.00 },
  { id: 7, payment_date: '2001-06-18', amount: 200.00 },
  { id: 8, payment_date: '2000-09-10', amount: 30.00 },
  { id: 9, payment_date: '1998-04-22', amount: 60.00 },
  { id: 10, payment_date: '1996-02-14', amount: 999.00 },
];
*/
