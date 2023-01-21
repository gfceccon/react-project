/**
 * Aqui importamos componentes, assets, styles, scripts, usando javascript
 * Nesse caso importamos 3 componentes
 */
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

/**
 * Componente principal da aplicação, aqui chamamos as páginas e o roteamento delas
 */
function App() {

  /**
   * Um componente retorna um JSX, Javascript como fosse escrito em HTML, podendo misturar código com tags
   * Nesse caso retornamos o header, o main content e o footer, todos outros componentes importados
   */
  return (
    <>
      <Header></Header>
      <Main></Main>
      {
        /**
         * Podemos passar um JSX ou Componente para outro componente, ele será considerado como componente "filhos" (children).
         * Isso é necessário em algumas bibliotecas como Routers e útil quando queremos passar um contéudo inteiro para outro componente.
         */
      }
      <Footer>
        <p>Projeto construído por Gustavo Ceccon.</p>
      </Footer>
    </>
  )
}

/**
 * Retorno do hook ou componente que vai ser importado por outras aplicações
 */
export default App
