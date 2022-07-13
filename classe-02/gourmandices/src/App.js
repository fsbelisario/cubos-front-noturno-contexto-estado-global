import { useState, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const contextoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});
  const valorCarrinho = { carrinho, setCarrinho };

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

  const mudarQtdNoCarrinho = (id, qtd) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = (novoCarrinho[id] || 0) + qtd;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((carrinho) => {
      const novoCarrinho = { ...carrinho };
      novoCarrinho[id] = 0;

      if (novoCarrinho[id] === 0) {
        delete novoCarrinho[id];
      }

      return novoCarrinho;
    });
  };

  return (
    <contextoCarrinho.Provider value={valorCarrinho} className="App">
      <Cabecalho
        produtos={produtos}
        mudarQtdNoCarrinho={mudarQtdNoCarrinho}
        removerDoCarrinho={removerDoCarrinho}
      />
      <Produtos
        produtos={produtos}
        adicionarCarrinho={(id) => adicionarAoCarrinho(id, 1)}
      />
    </contextoCarrinho.Provider>
  );
}