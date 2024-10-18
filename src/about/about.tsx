import React from 'react'
import ReactDOM from 'react-dom/client'
import "./about.css";

// const lenke = "https://services.api.no/api/content/search/acp?&sort=-published&limit=80&q=allOf(_links.publication.title=www.nettavisen.no,published%3E=2024-08-18,not(metadata.categories.name=Trav,metadata.categories.name=Sportspill,metadata.categories.isCommercial=true))"

// const response = await fetch(lenke);

// const data = await response.json();

// const articles = data.results;

{
/*
articles.map(article: any => {
    (article.model === "story") &&
    console.log(article.title);
})
*/}

/* console.log(data) */


/* i stedet for root, mer beskrivende navn */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container2">
    <div className='scroll'>
    {/* articles.map(article => {
    if (article.model === "story") {
    return (<div className="item">{article.title}</div>);}
    })*/}
    </div>
</div>
    <div className="container">
    {/*<img className="logos" src={biden}/>
    <h2><a href="nettavisen.no">Les mer om USA-valget</a></h2>
<img className="logos" src={trump} /> */}
    <div className="circle">Nå</div>
    <div className="sak">Saken: Hvorfor er kostholdsrådene så viktig for Norge?
</div>

    { /* articles.map(article => {
    if (article.model === "story") {
    return (<h3>{article.title}</h3>);}
    }) */}

    </div>
  </React.StrictMode>,
)
