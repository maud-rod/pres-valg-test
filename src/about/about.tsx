import React from 'react'
import ReactDOM from 'react-dom/client'
import trump from './trumpface.png';
import biden from './bidenface.png';
import "./about.css";

/* i stedet for root, mer beskrivende navn */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container">
    <img className="logos" src={biden}/>
    <h2><a href="nettavisen.no">Les mer om USA-valget</a></h2>
    <img className="logos" src={trump} />
    </div>
  </React.StrictMode>,
)
