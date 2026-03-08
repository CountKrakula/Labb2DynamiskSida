import './App.css'
import cvData from './CV.json'
import { Link } from 'react-router-dom'

function CV() {
  return (
    <>
    <header>
    <nav className="container">
      <div className="logo">AD</div>
      <ul className="nav-menu">
        <li><Link to="/">Huvudsida</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ommig">Om Mig</Link></li>
        <li><Link to="/cv" className="active">CV</Link></li>
      </ul>
    </nav>
  </header>

   <main className="page">
    <section className="title">
      <div className="card">
        <span className="tag">Meritförteckning</span>
        <h1>Curriculum Vitae</h1>
        <p>Ali Derwish – Stockholm, Sverige</p>
      </div>
    </section>

    <section>
      <div className="card">
        <h2>Erfarenhet</h2>
        {cvData.Erfarenhet.map((job) => (
            <div className="cv-entry" key={job.name}>
            <div className="cv-meta">{job.date}</div>
            <div className="cv-content">
            <strong>{job.name}</strong>
            <span className="cv-company">{job.location}</span>
            <p>{job.description}</p>
    </div>
  </div>
))}
      </div>
    </section>

    <section>
      <div className="card">
        <h2>Utbildning</h2>
     {cvData.Utbildning.map((job) => (
            <div className="cv-entry" key={job.name}>
            <div className="cv-meta">{job.date}</div>
            <div className="cv-content">
            <strong>{job.name}</strong>
            <span className="cv-company">{job.location}</span>
            <p>{job.description}</p>
    </div>
  </div>
))}
      </div>
    </section>

    <section>
      <div className="card">
        <h2>Tekniska färdigheter</h2>
        <div className="skills-grid">
          <div className="skill-item"><span className="skill-icon">💻</span><span>C# / .NET</span></div>
          <div className="skill-item"><span className="skill-icon">🌐</span><span>HTML / CSS / JS</span></div>
          <div className="skill-item"><span className="skill-icon">🗄️</span><span>SQL Server</span></div>
          <div className="skill-item"><span className="skill-icon">🛡️</span><span>SIEM / SOC</span></div>
          <div className="skill-item"><span className="skill-icon">🐧</span><span>Linux</span></div>
          <div className="skill-item"><span className="skill-icon">🔍</span><span>Incident Response</span></div>
        </div>
      </div>
    </section>

      {/* EasterModal */}
  <div id="easterModal" className ="modal">
    <div className="modal-content">
      <h2>Påskägg</h2>
      <p>Hej, Aldor!</p>
      <a href="#" className ="modal-close">&times;</a>
    </div>
  </div>

  </main>

   <footer>
    <p>© 2026 Ali Derwish. Alla rättigheter förbehållna.</p>
  </footer>
    </>
  )
}
export default CV



