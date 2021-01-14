import React from 'react'
import displayLines from '../helpers/textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Portfolio() ', 'b'], '{' ], 0],
     [['//Introduce to the user '], 1],
     [['print "Hello World";' ], 1],
     [['const ', ['name ', 'b'], '= ' ], 1],
     [['"', ['Jordan Hubbard', 'p'], '"' ], 2],
     [['const ', ['role ', 'b'], '= [' ], 1],
     [['"', ['Full Stack Web Development', 'p'], '",' ], 2],
     [['"', ['Freelancer', 'p'], '"' ], 2],
     [['];' ], 1],

     [['const ', ['languages ', 'b'], '= [' ], 1],
     [['"', ['Javascript', 'p'], '", "', ['HTML', 'p'], '", "', ['CSS', 'p'], '",'  ], 2],
     [['"', ['React', 'p'], '", "', ['Node', 'p'], '", "', ['PHP', 'p'], '"'  ], 2],
     [['];' ], 1],

     [['const ', ['platforms ', 'b'], '= [' ], 1],
     [['"', ['Wordpress', 'p'], '", "', ['Squarespace', 'p'], '", "', ['Wix', 'p'], '"'  ], 2],
     [['];' ], 1],

     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
// Freelance Web Developer</h3>
//                   <h3>- Javascript, HTML, CSS Expert</h3>
//                   <h3>- Wordpress, Squarespace, Wix, Shopify</h3>
//                   <h3>- React, Node, PHP, SQL</h3>