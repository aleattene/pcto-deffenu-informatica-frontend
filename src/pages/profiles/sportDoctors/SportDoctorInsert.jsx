import Dashboard from "../../../components/Dashboard/Dashboard.jsx";
import SportDoctorForm from "../../../components/Form/SportDoctorForm.jsx";
import PageLayout from "../../../components/Layout/PageLayout.jsx";

function SportDoctorInsert() {
  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={<SportDoctorForm isEditMode={false} />}
        />
      </PageLayout>
    </div>
  );
}

export default SportDoctorInsert;
