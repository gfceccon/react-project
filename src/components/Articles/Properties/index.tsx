interface Properties {
    fruta: string
    cor?: string // Esse é um argumento não obrigatório
}

/**
 * Podemos declarar o export diretamente antes da função.
 * Nesse caso, como Properties foi declarado anteriormente como uma interface, colocamos aqui para não ficar ambíguo e retornar o componente invés da interface.
 * @param props Qual a fruta de preferência e a cor dela (parâmetro opicional)
 */
export default function Properties(props : Properties) {
    return ( 
        <>
            <h2>Properties</h2>
            <p>Properties, ou props, é um objeto passado como argumento de um componente, ele pode incluir hooks, eventos, parâmetros etc.</p>
            <p>Quando usamos Typescript, é uma boa prática declarar o que será passado através de props. Isso é feito declarando uma interface.</p>
            {/**
             * Para estilo inline, basta passar um objeto com as tags de estilo.
             */}
            <p>Eu gosto de <span style={{color: props.cor}}>{props.fruta}</span></p>
            
            <p>Também podemos passar componentes como propriedade, nesse caso chamamos de children e podemos acessa-lo usando a interface PropsWithChildren passando a Properties, e usar props.children</p>
        </>
     );
}