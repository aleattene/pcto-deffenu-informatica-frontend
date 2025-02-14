import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import profilesService from "../services/profilesService";
import Dashboard from "../components/Dashboard/Dashboard";
import SportDoctorForm from "../components/Form/SportDoctorForm";
import PageLayout from "../components/Layout/PageLayout";

function SportDoctorModify() {
  const { id } = useParams();

  // Sport Doctors
  const [sportDoctor, setSportDoctor] = useState({
    first_name: "",
    last_name: "",
    vat_number: "",
  });

  useEffect(() => {
    const fetchSportDoctor = async () => {
      try {
        const response = await profilesService.getSportDoctorByID(id);
        setSportDoctor(response);
      } catch (error) {
        console.error("Errore nel recupero del medico sportivo:", error);
      }
    };
    fetchSportDoctor();
  }, [id]);

  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={
            <SportDoctorForm isEditMode={true} dataSportDoctor={sportDoctor} />
          }
        />
      </PageLayout>
    </div>
  );
}

export default SportDoctorModify;
