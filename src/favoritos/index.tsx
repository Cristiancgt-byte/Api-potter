import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { EquiposContext } from "../EquiposContext";

function Favoritos() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const equiposMap = useContext(EquiposContext);

  // 🔁 cargar favoritos desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  // 🔁 invertir mapa: slug → nombre bonito
  const equiposMapInvertido: Record<string, string> = Object.fromEntries(
    Object.entries(equiposMap).map(([key, value]) => [value, key])
  );

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes equipos favoritos</p>
      ) : (
        <ul>
          {favorites.map((team) => (
            <li key={team}>
              <Link to={`/equipo/${team}`}>
                {equiposMapInvertido[team] || team}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;