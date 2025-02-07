import React from 'react'
import './Dashboard.css'
import Button from './../Button/Button'

function Dashboard({ imageSrc, altText, content, buttons }) {

    //const handleClickAdd = () => navigate('/athletes/new/')

    return (
        <div id="dashboard">
              {imageSrc && <img id="dashboard-img" src={imageSrc} alt={altText} />}
              {content && <div id="dashboard-content">{content}</div>}
              <div id="dashboard-operations">
                {buttons}
            </div>
        </div>
    )
}

export default Dashboard