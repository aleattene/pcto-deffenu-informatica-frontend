import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import SportCertificateForm from "../../components/Form/SportCertificateForm.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";

function SportCertificateInsert() {
  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={<SportCertificateForm isEditMode={false} />}
        />
      </PageLayout>
    </div>
  );
}

export default SportCertificateInsert;
