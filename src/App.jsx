import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Athletes from "./pages/profiles/athletes/Athletes.jsx";
import AthleteInsert from "./pages/profiles/athletes/AthleteInsert.jsx";
import AthleteModify from "./pages/profiles/athletes/AthleteModify.jsx";
import Trainers from "./pages/profiles/trainers/Trainers.jsx";
import TrainerInsert from "./pages/profiles/trainers/TrainerInsert.jsx";
import TrainerModify from "./pages/profiles/trainers/TrainerModify.jsx";
import SportDoctors from "./pages/profiles/sportDoctors/SportDoctors.jsx";
import SportDoctorInsert from "./pages/profiles/sportDoctors/SportDoctorInsert.jsx";
import SportDoctorModify from "./pages/profiles/sportDoctors/SportDoctorModify.jsx";
import Payments from "./pages/payments/Payments.jsx";
import PaymentModify from "./pages/payments/PaymentModify.jsx";
import PaymentInsert from "./pages/payments/PaymentInsert.jsx";
import SportCertificates from "./pages/documentation/SportCertificates.jsx";
import SportCertificateModify from "./pages/documentation/SportCertificateModify.jsx";
import SportCertificateInsert from "./pages/documentation/SportCertificateInsert.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
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
