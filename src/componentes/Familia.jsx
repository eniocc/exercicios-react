import React from 'react'
import { filhosComProps } from '../utils/utils'
export default props =>
<div>
    <h1>Família</h1>
    {/* {props.children} */}
    {filhosComProps(props)} {/*esta forma ou a da linha abaixo*/}
    {/* {React.Children.map(props.children, child => {
       return React.cloneElement(child, { ...props })
    })} */} 
    {/* {React.cloneElement(props.children, { ...props })} */}
    {/* {React.cloneElement(props.children, props)} */}
    {/* {React.cloneElement(props.children, 
        { sobrenome: props.sobrenome })} */}
</div>