import './App.css'
import { Link } from 'react-router-dom'

function Home() {
  

  return (
    <>
    <header>
    <nav className="container">
      <div className="logo">AD</div>
      <ul className="nav-menu">
        <li><Link to="/"  className="active">Huvudsida</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/ommig">Om Mig</Link></li>
        <li><Link to="/cv">CV</Link></li>
      </ul>
    </nav>
  </header>

  <main className="page">
    <section className="title">
      <div className="card hero-card">
        <div className="hero-text">
          <span className="tag">Tillgänglig för nya möjligheter</span>
          <h1>Ali Derwish</h1>
          <h2>Fullstack Engineer &amp; Cybersecurity Analyst</h2>
          <p>Jag studerar full-stack .NET och jobbar som SOC L1 Analyst på ett cybersäkerhetsbolag i Stockholm.</p>
          <div className="hero-actions">
            <Link to="/cv" className="btn">Se mitt CV</Link>
            <Link to="/ommig" className="btn btn-outline">Om mig</Link>
          </div>
        </div>
        <div className="hero-badge">
          <div className="badge-circle">
            <span>SOC</span>
            <span className="badge-sub">L1 Analyst</span>
          </div>
        </div>
      </div>
    </section>

    <section className="skills-section">
      <div className="card">
        <h2>Kompetenser</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-icon">🛡️</span>
            <span>Cybersäkerhet</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">💻</span>
            <span>.NET / C#</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🌐</span>
            <span>Fullstack Webb</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🔍</span>
            <span>SIEM / SOC</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🗄️</span>
            <span>SQL / Databaser</span>
          </div>
          <div className="skill-item">
            <span className="skill-icon">🐧</span>
            <span>Linux</span>
          </div>
        </div>
      </div>
    </section>


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

export default Home
