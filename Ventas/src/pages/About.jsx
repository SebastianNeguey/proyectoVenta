import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>Esta es la página de información.</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
}