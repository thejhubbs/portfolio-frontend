import React from 'react'
import displayLines from './textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Hobbies() ', 'b'], '{' ], 0],
     [['const ', ['hobbies ', 'b'], '= [' ], 1],
     [['"', ['Art, Drawing, Painting', 'p'], '"' ], 2],
     [['"', ['Music, Guitar, Singing, Writing', 'p'], '"' ], 2],
     [[']' ], 1],
     [['const ', ['skills ', 'b'], '= [' ], 1],
     [['"', ['Design & Marketing', 'p'], '"' ], 2],
     [['"', ['Interpersonal & Leadership', 'p'], '"' ], 2],
     [[']' ], 1],
     [['const ', ['funfacts ', 'b'], '= [' ], 1],
     [['"', ['Spiritual, Buddhist, Christian', 'p'], '"' ], 2],
     [['"', ['Motivated To Own Business', 'p'], '"' ], 2],
     [[']' ], 1],
     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
