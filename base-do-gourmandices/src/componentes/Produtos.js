import { Fragment } from "react";
import { Produto } from "./Produto";

export function Produtos({ produtos, carrinho, adicionarCarrinho }) {
  const secoes = new Set(produtos.map((p) => p.secao));
  return (
    <main className="produtos">
      {[...secoes].map((secao) => (
        <Fragment key={secao}>
          <h2>{secao}</h2>
          <ul className="secao">
            {produtos
              .filter((p) => p.secao === secao)
              .map((produto) => (
                <li key={produto.id}>
                  <Produto
                    {...produto}
                    qtdCarrinho={carrinho[produto.id] || 0}
                    adicionarCarrinho={adicionarCarrinho}
                  />
                </li>
              ))}
          </ul>
        </Fragment>
      ))}
    </main>
  );
}
