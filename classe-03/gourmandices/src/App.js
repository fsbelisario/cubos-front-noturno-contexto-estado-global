import { useState, createContext } from "react";
import { Cabecalho } from "./componentes/Cabecalho";
import { Produtos } from "./componentes/Produtos";
import { produtos } from "./utils/produtos";
import "./styles.css";

export const contextoCarrinho = createContext();

export default function App() {
  const [carrinho, setCarrinho] = useState({});
  const valorCarrinho = { carrinho, setCarrinho };

  return (
    <contextoCarrinho.Provider value={valorCarrinho} className="App">
      <Cabecalho
        produtos={produtos}
      />
      <Produtos
        produtos={produtos}
      />
    </contextoCarrinho.Provider>
  );
}