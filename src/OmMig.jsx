import './App.css'
import { Link } from 'react-router-dom'

function OmMig() {
  return (
    <>
      <header>
        <nav className="container">
          <div className="logo">AD</div>
          <ul className="nav-menu">
            <li><Link to="/">Huvudsida</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/ommig" className="active">Om Mig</Link></li>
            <li><Link to="/cv">CV</Link></li>
          </ul>
        </nav>
      </header>
      <main className="page">
        <section className="title">
          <div className="card hero-card">
            <div className="hero-text">
              <span className="tag">Om mig</span>
              <h1>Hej, jag är Ali 👋</h1>
              <p>Jag är en driven tekniker med ett ben i cybersäkerhet och ett annat i mjukvaruutveckling. Just nu studerar jag fullstack .NET medan jag arbetar som SOC L1 Analyst i Stockholm.</p>
            </div>
            <div className="hero-badge">
              <div className="badge-circle">
                <img src="/Images/ad.jpg" alt="Picture of me" id="easter1" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="card">
            <h2>Min bakgrund</h2>
            <p>Med erfarenhet av att arbeta i en Security Operations Center (SOC) har jag utvecklat ett starkt öga för detaljer, snabb problemlösning och förståelse för hotlandskapet. Parallellt bygger jag min kompetens inom fullstack-utveckling med .NET och moderna webbteknologier.</p>
          </div>
        </section>
        <section>
          <div className="card">
            <h2>Intressen</h2>
            <div className="skills-grid">
              <div className="skill-item">
                <span className="skill-icon">🔐</span>
                <span>Penetration Testing</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🏗️</span>
                <span>Systemarkitektur</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📚</span>
                <span>Kontinuerligt lärande</span>
              </div>
              <div className="skill-item">
                <span className="skill-icon">🤝</span>
                <span>Teamarbete</span>
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

export default OmMig