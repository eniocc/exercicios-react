import React from 'react'

let rand1 = Math.random()
let rand2 = Math.random()

//export 
const ComponenteA = props =>
    <div>Meu valor é {rand1}</div>


//export
const ComponenteB = props =>
    <div>Meu valor é {rand2}</div>

export {ComponenteA, ComponenteB}
export default ComponenteA
//export { ComponenteA, ComponenteB }