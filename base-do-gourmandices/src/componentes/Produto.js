import { formatarDinheiro } from "../utils/dinheiro";

export function Produto({
  nome,
  preco,
  foto,
  id,
  qtdCarrinho,
  adicionarCarrinho
}) {
  return (
    <article className={`produto ${qtdCarrinho > 0 ? "selecionado" : ""}`}>
      <img src={foto} alt="" />
      <h3>{nome}</h3>
      <span className="preco">R${formatarDinheiro(preco)}</span>
      <button onClick={() => adicionarCarrinho(id)}>Kero + 1</button>
      <span className={`badge ${qtdCarrinho === 0 ? "zero" : ""}`}>
        {qtdCarrinho}
      </span>
    </article>
  );
}
