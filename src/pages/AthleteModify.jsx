import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import profilesService from "../services/profilesService";
import AthleteForm from "../components/Form/AthleteForm";
import Dashboard from "../components/Dashboard/Dashboard";
import PageLayout from "../components/Layout/PageLayout";

function AthleteModify() {
  const { id } = useParams();

  // Athletes
  const [athlete, setAthlete] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    place_of_birth: "",
    fiscal_code: "",
    category: "",
  });

  useEffect(() => {
    const fetchAthlete = async () => {
      try {
        const response = await profilesService.getAthleteByID(id);
        const { trainers, ...dataAthlete } = response;
        setAthlete(dataAthlete);
      } catch (error) {
        console.error("Errore nel recupero dell'atleta:", error);
      }
    };
    fetchAthlete();
  }, [id]);

  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={
            <AthleteForm isEditMode={true} dataAthlete={athlete} />
          }
        />
      </PageLayout>
    </div>
  );
}

export default AthleteModify;
