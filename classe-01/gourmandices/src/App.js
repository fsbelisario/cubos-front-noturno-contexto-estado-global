import { useState, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const contextoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});
  const valorCarrinho = { carrinho, setCarrinho };

  const incrementarCarrinho = (id, qtd) =>
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });

  return (
    <contextoCarrinho.Provider value={valorCarrinho} className="App">
      <Cabecalho
        produtos={produtos}
        incrementarCarrinho={incrementarCarrinho}
      />
      <Produtos
        produtos={produtos}
        adicionarCarrinho={(id) => incrementarCarrinho(id, 1)}
      />
    </contextoCarrinho.Provider>
  );
}