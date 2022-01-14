import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


const Highlight = (props: any) => {
    const { children, language = 'javascript' } = props
    return <SyntaxHighlighter
        showLineNumbers={true}
        startingLineNumber={0}
        language={language}
        style={atomOneDark}
        lineNumberStyle={{ color: '#abb2bf', fontSize: 14 }}
        wrapLines={true}
    >
        {children}
    </SyntaxHighlighter >
}


export default Highlight