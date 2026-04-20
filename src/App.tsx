import { BrowserRouter as Router, Route, Routes, Link} from 'react-router';
import Favoritos from './favoritos'
import Home from './home';
import Equipo from './equipo';
import Informativa from './informativa';
import Original from './original';
import Usuarios from './usuarios';


function App() {
  return (
    <>
    <Router>
      <nav className="c-menu">
        <Link to="/"><img src="" /><p>Home</p></Link>
        <Link to="/favoritos"><img src="" /><p>Favoritos</p></Link>
        <Link to="/original"><img src="" /><p>Original</p></Link>
        <Link to="/informativa"><img src="" /><p>Informativa</p></Link>
        <Link to="/usuario"><img src="" /><p>Usuario</p></Link>   
      </nav>

      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/favoritos" element={<Favoritos /> } />
        <Route path="/original" element={<Original /> } />
        <Route path="/informativa" element={<Informativa /> } />
        <Route path="/usuarios" element={<Usuarios /> } />
        <Route path="/equipo/:equipo" element={<Equipo /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
    