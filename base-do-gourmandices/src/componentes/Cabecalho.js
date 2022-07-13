import { useState } from "react";
import { Carrinho } from "./Carrinho";

export function Cabecalho({ carrinho, incrementarCarrinho, produtos }) {
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
            carrinho={carrinho}
            produtos={produtos}
            aberto={carrinhoAberto}
            setAberto={setCarrinhoAberto}
            incrementarCarrinho={incrementarCarrinho}
          />
        </button>
      </div>
    </header>
  );
}
