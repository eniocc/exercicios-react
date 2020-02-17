import React from 'react'

let rand1 = Math.random()
let rand2 = Math.random()

const ComponenteA = props =>
    <div>Meu valor é {rand1}</div>


const ComponenteB = props =>
    <div>Meu valor é {rand2}</div>

export {ComponenteA, ComponenteB}