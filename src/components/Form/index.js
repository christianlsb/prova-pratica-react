import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import "./style.css";

export function Form() {
  const [descricao, setDescricao] = useState("");
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novaTransacao = {
      codigo: Date.now(),
      descricao,
      entrada: parseFloat(entrada) || 0,
      saida: parseFloat(saida) || 0,
      total: (parseFloat(entrada) || 0) - (parseFloat(saida) || 0),
    };

    const transacoesExistentes =
      JSON.parse(localStorage.getItem("transacoes")) || [];

    const transacoesAtualizadas = [...transacoesExistentes, novaTransacao];

    localStorage.setItem("transacoes", JSON.stringify(transacoesAtualizadas));

    setDescricao("");
    setEntrada("");
    setSaida("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <Input
            placeholder="Descrição do lançamento"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="field">
          <Input
            placeholder="Valor de entrada"
            type="number"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
          />
        </div>
        <div className="field">
          <Input
            placeholder="Valor de saída"
            type="number"
            value={saida}
            onChange={(e) => setSaida(e.target.value)}
          />
        </div>
        <Button type="submit">Salvar</Button>
      </form>
    </div>
  );
}
