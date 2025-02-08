import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Athletes from './pages/Athletes.jsx';
import Trainers from './pages/Trainers.jsx';
import SportDoctors from './pages/SportDoctors.jsx';
import AthleteInsert from './pages/AthleteInsert.jsx';
import AthleteModify from './pages/AthleteModify.jsx';
import TrainerInsert from './pages/TrainerInsert.jsx';
import TrainerModify from './pages/TrainerModify.jsx';
import SportDoctorInsert from './pages/SportDoctorInsert.jsx';
import SportDoctorModify from './pages/SportDoctorModify.jsx';
function App() {

	return (
		<>
			<Router>
				<Sidebar />
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
				    <Route path="/sport-doctors/edit/:id" element={<SportDoctorModify />} />
				</Routes>
				{/*<Footer />*/}
			</Router>
		</>
	)
}

export default App
