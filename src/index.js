import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { ComponenteA as CompA, ComponenteB as CompB } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <FamiliaSilva/>
        {/* <MultiElementos/>*/}
        {/* <CompA />
        <CompB />*/}
        {/*<PrimeiroComponente valor="Bom dia" /> */}
    </div>
    , elemento)