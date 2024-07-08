import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./style.css";

export function Card({ nome, valor, nomeDoBotao, btn }) {
  return (
    <div className="card">
      <span>{nome}</span>
      <span>{valor}</span>
      {btn && (
        <Link to={"lancamento"}>
          <Button>{nomeDoBotao}</Button>
        </Link>
      )}
    </div>
  );
}
