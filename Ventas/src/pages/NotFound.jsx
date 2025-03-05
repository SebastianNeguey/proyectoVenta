import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Página No Encontrada</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}