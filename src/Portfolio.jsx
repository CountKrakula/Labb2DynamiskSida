import './App.css'
import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'

function Portfolio() {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/CountKrakula/repos")
    .then(response => response.json())
    .then(data => {
      setRepos(data);
      setLoading(false);
    })
  }, [])


  return (
    <>
    
   
       <header>
    <nav className="container">
      <div className="logo">AD</div>
      <ul className="nav-menu">
        <li><Link to="/">Huvudsida</Link></li>
        <li><Link to="/portfolio" className="active">Portfolio</Link></li>
        <li><Link to="/ommig">Om Mig</Link></li>
        <li><Link to="/cv">CV</Link></li>
      </ul>
    </nav>
  </header>

  <main className="page">
    <section className="title">
      <div className="card">
        <span className="tag">Mina projekt</span>
        <h1>Portfolio</h1>
        <p>Ett urval av projekt inom webbutveckling och cybersäkerhet.</p>
      </div>
    </section>

    <section>
      <div className="product-container">
        <div className="card project-card">
          <span className="project-tag">Webb</span>
          <h2>CV-Portal</h2>
          <a href="#popup1" className="btn" style={{marginTop: "1rem"}}>Se projekt</a>
        </div>
        <div className="card project-card">
          <span className="project-tag">Säkerhet</span>
          <h2>SOC Dashboard</h2>
          <a href="#popup2" className="btn" style={{marginTop: "1rem"}}>Se projekt</a>
        </div>
        <div className="card project-card">
          <span className="project-tag">.NET</span>
          <h2>Fullstack App</h2>
          <a href="#popup3" className="btn" style={{marginTop: "1rem"}}>Se projekt</a>
        </div>
      </div>
    </section>

        
    {loading ? <p>Laddar projekt...</p> : 
<div className="product-container">
  {repos.map((repo) => (
    <div className="card project-card" key={repo.name}>
      <span className="project-tag">GitHub</span>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  ))}
</div>
}


    {/* Modal 1 */}
  <div id="popup1" className="modal">
    <div className="modal-content">
      <p>Denna sida – en personlig CV-portal byggd med HTML, CSS och JavaScript.</p>
      <a href="#" className ="modal-close">&times;</a>
    </div>
  </div>

   {/* Modal 2 */}
  <div id="popup2" className="modal">
    <div className="modal-content">
      <p>Övervakningsdashboard för incidenthantering byggd under praktik.</p>
      <a href="#" className="modal-close">&times;</a>
    </div>
  </div>

    {/* Modal 3 */}
  <div id="popup3" className="modal">
    <div className="modal-content">
      <p>En fullstack-applikation med ASP.NET Core backend och React frontend.</p>
      <a href="#" className="modal-close">&times;</a>
    </div>
  </div>

    {/* EasterModal */}
  <div id="easterModal" className="modal">
    <div className="modal-content">
      <h2>Påskägg</h2>
      <p>Hej, Aldor!</p>
      <a href="#" className="modal-close">&times;</a>
    </div>
  </div>
    
  </main>

  <footer>
    <p>© 2026 Ali Derwish. Alla rättigheter förbehållna.</p>
  </footer>
    </>
  )
}
export default Portfolio



