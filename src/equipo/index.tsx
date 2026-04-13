import { useParams } from "react-router";
import { useEffect, useState } from "react";

interface TeamData {
  team: {
    name: string;
    info: {
      city: string;
      founded: string;
      stadium: string;
      president: string;
      last_title: string;
    };
    ranking: {
      position: string;
      competition: string;
    };
    social: {
      facebook: string;
      instagram: string;
      x: string;
    };
    links: {
      store: string;
      tickets: string;
    };
  };
}

function Equipo() {
  const { equipo } = useParams<{ equipo: string }>();

  const [data, setData] = useState<TeamData | null>(null);

  useEffect(() => {
  if (!equipo) return;

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/sdtibata/dataliga/main/${equipo}.json`
      );

      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error cargando datos:", error);
    }
  };

  fetchData();
}, [equipo]);

  if (!data) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{data.team.name}</h1>

      <h2>Información</h2>
      <p><strong>Ciudad:</strong> {data.team.info.city}</p>
      <p><strong>Fundado:</strong> {data.team.info.founded}</p>
      <p><strong>Estadio:</strong> {data.team.info.stadium}</p>
      <p><strong>Presidente:</strong> {data.team.info.president}</p>
      <p><strong>Último título:</strong> {data.team.info.last_title}</p>

      <h2>Ranking</h2>
      <p><strong>Posición:</strong> {data.team.ranking.position}</p>
      <p><strong>Competencia:</strong> {data.team.ranking.competition}</p>

      <h2>Redes</h2>
      <ul>
        <li>
          <a href={data.team.social.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href={data.team.social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href={data.team.social.x} target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
        </li>
      </ul>

      <h2>Extras</h2>
      <ul>
        <li>
          <a href={data.team.links.store} target="_blank" rel="noreferrer">
            Tienda oficial
          </a>
        </li>
        <li>
          <a href={data.team.links.tickets} target="_blank" rel="noreferrer">
            Comprar boletas
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Equipo;