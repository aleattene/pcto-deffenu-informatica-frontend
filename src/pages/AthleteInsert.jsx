import AthleteForm from "../components/Form/AthleteForm";
import Dashboard from "../components/Dashboard/Dashboard";
import PageLayout from "../components/Layout/PageLayout";

function AthleteInsert() {
  return (
    <div>
      <PageLayout>
        <Dashboard
          isViewMode={false}
          formComponent={<AthleteForm isEditMode={false} />}
        />
      </PageLayout>
    </div>
  );
}

export default AthleteInsert;
