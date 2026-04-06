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
        <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy9mBtyJWUPLRobv__N2OwHYdiKAWarKroQ&s" /><p>Home</p></Link>
        <Link to="/favoritos"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwirKiGL1VFlx1A456XT5nxNyWds8y4-K5zg&s" /><p>Favoritos</p></Link>
        <Link to="/original"><img src="https://media.istockphoto.com/id/1448912272/vector/soccer-ball-icon-football-game-ball-icons.jpg?s=170667a&w=0&k=20&c=BppyhfxxHRxTSk_1urxYxFTh9a-UprsyYm5vI0XC7Lg=" /><p>Original</p></Link>
        <Link to="/informativa"><img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/more-info-icon.png" /><p>Informativa</p></Link>
        <Link to="/usuario"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzXYh-X4wxX1jfbPywa8HWoNGDnx1Tlo0-g&s" /><p>Usuario</p></Link>   
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
    