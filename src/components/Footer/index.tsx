import { PropsWithChildren} from "react";

/**
 * Componente de rodapé, bastante similar ao jeito que fazemos a Main (passando children).
 * Nesse caso não explicitamos através do Props
 */

interface Properties {
}

/**
 * Nesse caso usamos props da própria biblioteca React que acopla o children.
 * @param props Children juntamente com os atributos dentro da interface Properties
 * @returns Rodapé
 */

function Footer(props: PropsWithChildren<Properties>) {
    return (
        <footer>
            {props.children}
        </footer>
    );
}

export default Footer;