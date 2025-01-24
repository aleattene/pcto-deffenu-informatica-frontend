import React from 'react'
import './Dashboard.css'

function Dashboard({ imageSrc, altText, content }) {

    return (
        <div id="dashboard">
              {imageSrc && <img id="dashboard-img" src={imageSrc} alt={altText} />}
              {content && <div id="dashboard-content">{content}</div>}
        </div>
    )
}

export default Dashboard