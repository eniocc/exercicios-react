import React from 'react'
import ReactDom from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { ComponenteA as CompA, ComponenteB as CompB } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDom.render(
    <div>
        <Familia>
            <Membro nome="André" sobrenome="Pereira"/> 
            <Membro nome="Mariana" sobrenome="Pereira"/>             
        </Familia>
        <Familia>
            <Membro nome="Beatriz" sobrenome="Arruda"/> 
            <Membro nome="Gustavo" sobrenome="Arruda"/>
        </Familia>
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos/>*/}
        {/* <CompA />
        <CompB />*/}
        {/*<PrimeiroComponente valor="Bom dia" /> */}
    </div>
    , elemento)