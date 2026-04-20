import { createContext } from "react";

export const equiposMap: Record<string, string> = {
  "América de Cali SA": "america-de-cali",
  "CA Bucaramanga": "atletico-bucaramanga",
  "Club Atlético Nacional SA": "atletico-nacional",
  "Club Deportes Tolima SA": "deportes-tolima",
  "Asociación Deportivo Cali": "deportivo-cali",
  "Deportivo Independiente Medellín": "independiente-medellin",
  "Club Independiente Santa Fe": "independiente-santa-fe",
  "CD Popular Junior FC SA": "junior",
  "Millonarios FC": "millonarios",
  "Once Caldas SA": "once-caldas",
  "Internacional de Bogotá": "internacional-bogota",
  "Club Llaneros SA": "llaneros",
  "Águilas Doradas": "aguilas-doradas",
  "Fortaleza FC": "fortaleza",
  "Alianza FC": "alianza",
  "Jaguares de Córdoba FC": "jaguares",
  "Cúcuta Deportivo FC": "cucuta",
  "Boyacá Chicó FC": "boyaca-chico",
  "Deportivo Pereira FC": "pereira"
};

export const EquiposContext = createContext(equiposMap);