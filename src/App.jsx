import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div class="container">
        <div class="box">
          <img src="img/LOGO.jpg" width="70" height="55" />
          <h1>Sport Management</h1>
          <div id="button4">
            <h2>User</h2>
          </div>
          <hr />
            <h3>
              <div id="button1">
                <a href="collegamenti/atleti.html">Atleti</a>
              </div>
              <div id="button2">
                <a href="collegamenti/tecnici.html">Tecnici</a>
              </div>
              <div id="button3">
                <a href="collegamenti/medici.html">Medici</a>
              </div>

            </h3>
        </div>

        <div class="image-container">
          <img src="img/immagine_federer.jpg" />
        </div>
      </div>
    </>
  )
}

export default App
