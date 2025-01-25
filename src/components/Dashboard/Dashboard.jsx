import React from 'react'
import './Dashboard.css'
import Button from './../Button/Button'

function Dashboard({ imageSrc, altText, content }) {

    //const handleClickAdd = () => navigate('/athletes/new/')

    return (
        <div id="dashboard">
              {imageSrc && <img id="dashboard-img" src={imageSrc} alt={altText} />}
              {content && <div id="dashboard-content">{content}</div>}
              <div id="dashboard-operations">
                {/*
              <Button buttonText="Aggiungi Atleta" onClick={alert("Modifica Atleta")} />
              <Button buttonText="Modifica Atleta" onClick={() => alert("Modifica Atleta")} />
              <Button buttonText="Elimina Atleta" onClick={() => alert("Elimina Atleta")} />
              */}
            </div>
        </div>
    )
}

export default Dashboard