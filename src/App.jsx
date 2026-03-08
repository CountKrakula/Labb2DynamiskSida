import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import CV from './CV.jsx'
import Portfolio from './Portfolio.jsx'
import OmMig from './OmMig.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ommig" element={<OmMig />} />
    </Routes>
  )
}

export default App