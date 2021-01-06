import React from 'react'
import displayLines from '../helpers/textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Portfolio() ', 'b'], '{' ], 0],
     [['print "', ['Hello World', 'p'], '";' ], 1],
     [['const ', ['name ', 'b'], '= ' ], 1],
     [['"', ['Jordan Hubbard', 'g'], '"' ], 2],
     [['const ', ['role ', 'b'], '= [' ], 1],
     [['"', ['Full Stack Web Development', 'p'], '",' ], 2],
     [['"', ['Small Business Consultation & Tutoring', 'p'], '",' ], 2],
     [['"', ['Media & Design', 'p'], '"' ], 2],
     [['];' ], 1],
     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
