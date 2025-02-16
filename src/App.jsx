import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Athletes from "./pages/Athletes.jsx";
import AthleteInsert from "./pages/AthleteInsert.jsx";
import AthleteModify from "./pages/AthleteModify.jsx";
import Trainers from "./pages/Trainers.jsx";
import TrainerInsert from "./pages/TrainerInsert.jsx";
import TrainerModify from "./pages/TrainerModify.jsx";
import SportDoctors from "./pages/SportDoctors.jsx";
import SportDoctorInsert from "./pages/SportDoctorInsert.jsx";
import SportDoctorModify from "./pages/SportDoctorModify.jsx";
import Payments from "./pages/Payments.jsx";
import PaymentModify from "./pages/PaymentModify.jsx";
import PaymentInsert from "./pages/PaymentInsert.jsx";
import SportCertificates from "./pages/SportCertificates.jsx";
import SportCertificateModify from "./pages/SportCertificateModify.jsx";
import SportCertificateInsert from "./pages/SportCertificateInsert.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />{" "}
              </>
            }
          />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/athletes/new" element={<AthleteInsert />} />
          <Route path="/athletes/edit/:id" element={<AthleteModify />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/new" element={<TrainerInsert />} />
          <Route path="/trainers/edit/:id" element={<TrainerModify />} />
          <Route path="/sport-doctors" element={<SportDoctors />} />
          <Route path="/sport-doctors/new" element={<SportDoctorInsert />} />
          <Route
            path="/sport-doctors/edit/:id"
            element={<SportDoctorModify />}
          />
          <Route path="/payments" element={<Payments />} />
          <Route path="/payments/new" element={<PaymentInsert />} />
          <Route path="/payments/edit/:id" element={<PaymentModify />} />
          <Route path="/sport-certificates" element={<SportCertificates />} />
          <Route
            path="/sport-certificates/new"
            element={<SportCertificateInsert />}
          />
          <Route
            path="/sport-certificates/edit/:id"
            element={<SportCertificateModify />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
