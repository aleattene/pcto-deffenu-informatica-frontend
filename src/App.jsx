import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Athletes from './pages/Athletes.jsx';
import Trainers from './pages/Trainers.jsx';
import SportDoctors from './pages/SportDoctors.jsx';

function App() {

	return (
		<>
			<Router>
				<Sidebar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/athletes" element={<Athletes />} />
					<Route path="/trainers" element={<Trainers />} />
					<Route path="/sport-doctors" element={<SportDoctors />} />
				</Routes>
				<Footer />
			</Router>
		</>
	)
}

export default App
