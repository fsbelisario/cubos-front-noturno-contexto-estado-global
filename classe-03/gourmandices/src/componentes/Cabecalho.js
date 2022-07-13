import { useState, useContext } from "react";
import { Carrinho } from "./Carrinho";
import { contextoCarrinho } from "../App"

export function Cabecalho({ produtos }) {
  const { carrinho } = useContext(contextoCarrinho);

  const total = Object.values(carrinho).reduce(
    (soma, qtdItemEspecifico) => soma + qtdItemEspecifico,
    0
  );

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <header>
      <div className="limitador">
        <h1>Gourmandices</h1>
        <button onClick={() => setCarrinhoAberto((x) => !x)}>
          Carrinho
          <span className={`badge ${total === 0 ? "zero" : ""}`}>{total}</span>
          <Carrinho
            produtos={produtos}
            aberto={carrinhoAberto}
            setAberto={setCarrinhoAberto}
          />
        </button>
      </div>
    </header>
  );
}