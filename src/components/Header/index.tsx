/**
 * Importamos um css e uma imagem, como se fosse um objeto javascript
 */
import "./index.css"
import gato from "../../assets/gato.jpg";

/**
 * Componente de cabeçalho
 */
function Header() {
    /**
     * Aqui usamos as tags HTML, no caso do header, colocamos uma imagem referenciando um objeto importado
     * Para usar um nome de classe, usamos className, já que a palavra class é reservada
     */
    return ( 
        <header>
            <img className="gato" src={gato}></img>
            <h1>React Project</h1>
        </header>
     );
}

export default Header;