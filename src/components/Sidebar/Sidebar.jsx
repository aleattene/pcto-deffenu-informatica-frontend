import React from 'react'
import './Sidebar.css'
import Button from './../Button/Button.jsx'
import Logo from './../Logo/Logo.jsx'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate() 

  // Logo Action
  const handleClickLogo = () => navigate('/')

  // Button Actions
  const handleClickOne = () => navigate('/athletes')
  const handleClickTwo = () => navigate('/trainers')
  const handleClickThree = () => navigate('/sport-doctors')
  const handleClickFour = () => navigate('/payments')
  const handleClickFive = () => navigate('/sport-certificates')
 

  return (
    <div id="sidebar">
      <div id="sidebar-logo">
        <Logo onClick={handleClickLogo}/>
      </div>
      <div id="sidebar-buttons">
        <Button buttonText="Atleti" onClick={handleClickOne} />
        <Button buttonText="Allenatori" onClick={handleClickTwo} />
        <Button buttonText="Medici" onClick={handleClickThree} />
        <Button buttonText="Compensi" onClick={handleClickFour} />
        <Button buttonText="Certificati Medici" onClick={handleClickFive} />
      </div>
    </div>
  )
}

export default Sidebar
