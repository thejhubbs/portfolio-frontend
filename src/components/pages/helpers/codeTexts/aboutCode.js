import React from 'react'
import displayLines from './textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Professional() ', 'b'], '{' ], 0],
     [['print "', ['Programmer', 'p'], '", "Engineer"' ], 1],
     [['const ', ['schooling ', 'b'], '= [' ], 1],
     [['"', ['The Ohio State University', 'p'], '"' ], 2],
     [['"', ['Lambda School', 'p'], '"' ], 2],
     [[']' ], 1],
     [['const ', ['work ', 'b'], '= ' ], 1],
     [['"', ['Freelance (Upwork)', 'p'], '"' ], 2],
     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
