import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import profilesService from "../services/profilesService";
import Dashboard from "../components/Dashboard/Dashboard";
import TrainerForm from "../components/Form/TrainerForm";
import PageLayout from "../components/Layout/PageLayout";

function TrainerModify() {
  const { id } = useParams();

  // Trainers
  const [trainer, setTrainer] = useState({
    first_name: "",
    last_name: "",
    fiscal_code: "",
  });

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await profilesService.getTrainerByID(id);
        setTrainer(response);
      } catch (error) {
        console.error("Errore nel recupero dell'allenatore:", error);
      }
    };
    fetchTrainer();
  }, [id]);

  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={
            <TrainerForm isEditMode={true} dataTrainer={trainer} />
          }
        />
      </PageLayout>
    </div>
  );
}

export default TrainerModify;
