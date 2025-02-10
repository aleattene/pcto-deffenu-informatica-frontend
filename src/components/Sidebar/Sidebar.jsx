import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './../Button/Button.jsx'
import Logo from './../Logo/Logo.jsx'
import './Sidebar.css'

function Sidebar() {

	const navigate = useNavigate()

	// Logo Action
	const handleClickLogo = () => navigate('/')

	// Buttons Actions
	const handleClickOne = () => navigate('/athletes')
	const handleClickTwo = () => navigate('/trainers')
	const handleClickThree = () => navigate('/sport-doctors')
	const handleClickFour = () => navigate('/payments')
	const handleClickFive = () => navigate('/sport-certificates')


	return (
		<div id="sidebar">
			<div id="sidebar-logo">
				<Logo onClick={handleClickLogo} />
			</div>
			<div id="sidebar-buttons">
				<Button buttonText="Atleti" onClick={handleClickOne} />
				<Button buttonText="Allenatori" onClick={handleClickTwo} />
				<Button buttonText="Medici Sportivi" onClick={handleClickThree} />
				<Button buttonText="Compensi" onClick={handleClickFour} />
				<Button buttonText="Certificati Medici" onClick={handleClickFive} />
			</div>
		</div>
	)
}

export default Sidebar
