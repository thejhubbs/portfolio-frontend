import React from 'react'
import displayLines from '../helpers/textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Professional() ', 'b'], '{' ], 0],
     [['print "', ['Programmer', 'p'], '", "Engineer"' ], 1],
     [['const ', ['schooling ', 'b'], '= [' ], 1],
     [['"', ['The ', 'p'], ['Ohio State', 'g'], [' University', 'p'], '"' ], 2],
     [['"', ['Lambda', 'g'], [' School', 'p'], '"' ], 2],
     [[']' ], 1],
     [['const ', ['paidCodingWork ', 'b'], '= ' ], 1],
     [['"', ['Freelance (', 'p'], ['Upwork', 'g'], [')', 'p'], '"' ], 2],
     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
