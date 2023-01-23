import { createRef } from "react";
import { useRef } from "react";

function Refs() {
  const counterRef = useRef<number>(0);
  const inputRef = createRef<HTMLInputElement>();

  return (
    <>
      <h2>Referências</h2>
      <p>
        Referências são objetos que tem um estado que podem ser alterados sem
        ter que renderizar os objetos novamente. Isso é útil para animações ou
        acesso direto a elementos DOM, porém podem ser usados de forma geral
        para string, números etc.
      </p>
      <p>
        Existem dois tipos de referências, o genérico e o legado. O genérico é
        aquele que podemos usar em vários componentes e tem um estado global. A
        diferença entre criar um objeto JS normal ou usar o ref é que temos o
        mesmo objeto a cada renderização O legado é o que podemos apontar para
        um elemento DOM, para Typescript, é necessário usar comandos diferentes
        para os dois.
      </p>
      <p>
        useRef cria a referência a um objeto genérico. e createRef cria uma
        referência para um objeto DOM. Isso dado que passamos as informações
        corretas para os componentes.
      </p>
      {/**
       * No exemplo abaixo temos um input text que mostramos um contador usando ambos a referência de DOM como a referência genérica.
       * Ao clicar no botão, rodamos o código que muda o valor a cada clique.
       */}
      <input type={"text"} ref={inputRef}></input>
      <input
        type={"button"}
        onClick={() => {
          inputRef.current?.setAttribute(
            "value",
            counterRef.current.toString()
          );
          counterRef.current++;
        }}
        value={"Incrementar"}
      ></input>
    </>
  );
}

export default Refs;
