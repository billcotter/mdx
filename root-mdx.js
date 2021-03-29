
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {Headings, Code, Blockquote, Example, PrismSetup } from './src/components/Complete'

{/*const Testing = ({ children }) => {
    return (
        <div className="code">{children}</div>
    )
}

 const myH2 = props => {
    if (props.title) {
        return (
        <h2 {...props} style={{fontSize:"2rem", color:"red"}}>
        {props.children}</h2> 
        )
    }
    return (
    <h2 {...props} className="code">{props.children}</h2>
    )
    

}*/}
const components = {
    h2: Headings.myH2,
    h4: Headings.myH4,
    inlineCode: Code,
    blockquote: Blockquote,
    pre: PrismSetup,

}

export const wrapMDX = ({ element }) =>
{
    return (
        <MDXProvider components={components}>{element}</MDXProvider>

    )
    
}