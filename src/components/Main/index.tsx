import Article from "../Article";
import Components from "../Articles/Components";
import Properties from "../Articles/Properties";

/**
 * Componente com conteúdo principal
 */
function Main() {
    return (
        <main>
            {/**
             * Esse é um comentário dentro do JSX.
             * Passamos um componente através do props colocando dentro dele. Ele pode ser acessado via props.children
             */}
            <Article>
                <Components></Components>
            </Article>
            <Article>
                <Properties fruta="Maça" cor="red"></Properties>
            </Article>
        </main>
    );
}

export default Main;