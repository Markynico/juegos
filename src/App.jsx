import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JuegoMemoria from './components/JuegoMemoria'; // Juego de memoria
import Tateti from './components/Tateti'; // Juego tateti
import Proximamente from './components/Proximamente'; // Juego proximamente

function App() {
  return (
    
    <Router>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>JUEGOS</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '10px 0' }}>
              <Link to="/memoria">Juego de Memoria</Link>
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/tateti">Tateti</Link>
              
            </li>
            <li style={{ margin: '10px 0' }}>
              <Link to="/proximamente">Proximamente...</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/memoria" element={<JuegoMemoria />} />
          <Route path="/tateti" element={<Tateti />} />
          <Route path="/proximamente" element={<Proximamente />} />
          
        </Routes>
      </div>
    </Router>
   // arreglar el tateti
  );

  
}

export default App;
