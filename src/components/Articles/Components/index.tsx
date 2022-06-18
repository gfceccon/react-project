import { Fragment } from "react";

function Components() {
    return ( 
        /**
         * O retorno é um Fragment, um JSX "vazio", útil para agrupar tags HTML sem ter que criar uma div.
         * Também pode ser substituído por <>, dispensando a importação
         */
        <Fragment>
            <>
                <h2>Componentes</h2>
            </>
            <p>Componentes são uma parte fundamental do React, neles definimos comportamentos e conteúdo da página, usando JSX (uma mistura de Javascript e HTML).</p>
            <p>Eles podem ser definidos através de classes ou funções, esse sendo mais popularmente usado.</p>
        </Fragment>
     );
}

export default Components;