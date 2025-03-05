import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la Página de Inicio Evelyn</h1>
      <Button text="Haz clic" onClick={() => alert("¡Hola!")} />
      <Link to="/about">Ir a Sobre Nosotros</Link>
    </div>
  );
}