import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sportCertificatesService from "../../services/documentation/sportCertificatesService";
import Dashboard from "../../components/Dashboard/Dashboard";
import SportCertificateForm from "../../components/Form/SportCertificateForm";
import PageLayout from "../../components/Layout/PageLayout";

function SportCertificateModify() {
  const { id } = useParams();

  // Sport Certificates
  const [sportCertificate, setSportCertificate] = useState({
    issue_date: "",
    expiration_date: "",
    sport_doctor: "",
    athlete: "",
  });

  useEffect(() => {
    const fetchSportCertificate = async () => {
      try {
        const response = await sportCertificatesService.getSportCertificateByID(id);
        setSportCertificate(response);
      } catch (error) {
        console.error("Errore nel recupero del certificato medico:", error);
      }
    };
    fetchSportCertificate();
  }, [id]);

  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={
            <SportCertificateForm
              isEditMode={true}
              dataSportCertificate={sportCertificate}
            />
          }
        />
      </PageLayout>
    </div>
  );
}

export default SportCertificateModify;
