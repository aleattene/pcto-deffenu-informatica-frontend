import React from 'react'
import './Sidebar.css'
import Button from './../Button/Button.jsx'
import Logo from './../Logo/Logo.jsx'

function Sidebar() {
  // Button Actions
  const handleClickOne = () => alert('Hai cliccato il bottone Atleti!')
  const handleClickTwo = () => alert('Hai cliccato il bottone Allenatori!')
  const handleClickThree = () => alert('Hai cliccato il bottone Medici!')

  return (
    <div id="sidebar">
      <div id="sidebar-logo">
        <Logo />
      </div>
      <div id="sidebar-buttons">
        <Button buttonText="Atleti" onClick={handleClickOne} />
        <Button buttonText="Allenatori" onClick={handleClickTwo} />
        <Button buttonText="Medici" onClick={handleClickThree} />
      </div>
    </div>
  )
}

export default Sidebar
