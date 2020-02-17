import React from 'react'

import Membro from './Membro'

export default props =>
<div>
    <h1>Família {props.sobrenome}</h1>
    <Membro nome="Rafael" sobrenome={props.sobrenome}/>
    <Membro nome="Daniela" sobrenome={props.sobrenome}/>
    <Membro nome="Pedro" sobrenome="Teste"/>
    <Membro nome="Ana" sobrenome={props.sobrenome}/>
</div>