import { useEffect, useState } from "react";
import { Card, ContainerCards, PageContent } from "../../components";
import { lista } from "../../data";

export function Home() {
  const [entradas, setEntradas] = useState(0);
  const [saida, setSaida] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const transacoesSalvas =
      JSON.parse(localStorage.getItem("transacoes")) || lista;
    setTransacoes(transacoesSalvas);
  }, []);

  useEffect(() => {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));

    // Calcular valores totais
    const totalEntradas = transacoes.reduce(
      (total, transacao) => total + (transacao.entrada || 0),
      0
    );

    const totalSaidas = transacoes.reduce(
      (total, transacao) => total + (transacao.saida || 0),
      0
    );

    const saldo = transacoes.reduce(
      (total, transacao) => total + (transacao.total || 0),
      0
    );

    setEntradas(totalEntradas);
    setSaida(totalSaidas);
    setSaldo(saldo);
  }, [transacoes]);

  console.log(entradas);
  console.log(saida);
  console.log(saldo);

  return (
    <PageContent title="Home">
      <ContainerCards>
        <Card
          btn
          nomeDoBotao={"Adicionar Entrada"}
          nome="Entrada"
          valor={`R$ ${entradas.toFixed(2)}`}
        />
        <Card
          btn
          nomeDoBotao={"Adicionar Saída"}
          nome="Saída"
          valor={`R$ ${saida.toFixed(2)}`}
        />
        <Card nome="Saldo" valor={`R$ ${saldo.toFixed(2)}`} />
      </ContainerCards>
    </PageContent>
  );
}
