import { useContext } from "react";
import { formatarDinheiro } from "../utils/dinheiro";
import { contextoCarrinho } from "../App"

export function Produto({
  nome,
  preco,
  foto,
  id,
  qtdCarrinho
}) {
  const { setCarrinho } = useContext(contextoCarrinho);

  const adicionarAoCarrinho = (id) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + 1;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });
  };

  return (
    <article className={`produto ${qtdCarrinho > 0 ? "selecionado" : ""}`}>
      <img src={foto} alt="" />
      <h3>{nome}</h3>
      <span className="preco">R${formatarDinheiro(preco)}</span>
      <button onClick={() => adicionarAoCarrinho(id)}>Kero + 1</button>
      <span className={`badge ${qtdCarrinho === 0 ? "zero" : ""}`}>
        {qtdCarrinho}
      </span>
    </article>
  );
}