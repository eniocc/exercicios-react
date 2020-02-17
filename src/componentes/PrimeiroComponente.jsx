import React from 'react'

let rand = Math.random()
let logical = rand > 0.5 ? 'Sim': 'Não'
export default (props) =>
<div>
    <h1>{props.valor}</h1>
    {console.log(props)}
    {console.log(rand)}
    {console.log(logical)}
</div>

// export default () =>
//     <h1>Primeiro Componente</h1>