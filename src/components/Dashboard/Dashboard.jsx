import React from 'react'
import './Dashboard.css'

function Dashboard({ imageSrc, altText, content, buttons }) {

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