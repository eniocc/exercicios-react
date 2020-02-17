import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { ComponenteA as CompA, ComponenteB as CompB } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <ComponenteComFuncao/>
        {/* <Familia sobrenome="Pereira">
            <Membro nome="André"/> 
            <Membro nome="Mariana" />
        </Familia> */}
        {/* <FamiliaSilva sobrenome="Silva"/> */}
        {/* <MultiElementos/>*/}
        {/* <CompA />
        <CompB />*/}
        {/*<PrimeiroComponente valor="Bom dia" /> */}
    </div>
    , elemento)