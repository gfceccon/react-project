/**
 * Definições de quais argumentos deverão ser enviados via props.
 * Para Componentes, usamos JSX.Element, nesse caso devemos passar um ou mais Componentes através do children.
 */
interface Properties {
    children: JSX.Element[] | JSX.Element
}

/**
 * Um artigo do React Project
 */
function Article(props: Properties) {
    return (
        <article>
            {/**
             * Componentes internos passados para o Article
             */}
            {props.children}
        </article>
    );
}
export default Article;