import React from 'react'
import './Sidebar.css'
import Button from './../Button/Button.jsx'

function Sidebar() {
  // Button Actions
  const handleClickOne = () => alert('Hai cliccato il bottone Atleti!')
  const handleClickTwo = () => alert('Hai cliccato il bottone Allenatori!')
  const handleClickThree = () => alert('Hai cliccato il bottone Medici!')

  return (
    <div id="sidebar">
      <Button buttonText="Atleti" onClick={handleClickOne} />
      <Button buttonText="Allenatori" onClick={handleClickTwo} />
      <Button buttonText="Medici" onClick={handleClickThree} />
    </div>
  )
}

export default Sidebar
