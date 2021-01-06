import React from 'react'
import displayLines from '../helpers/textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['summary() ', 'b'], '{' ], 0],

     [['print "', ['Web Programmer', 'p'], '", "Engineer"' ], 1],

     [['const ', ['languages', 'b'], '= [' ], 1],
     [['"', ['HTML,  CSS, Javascript', 'p'], '",' ], 2],
     [['"', ['React, Node, PHP, SQL', 'p'], '"' ], 2],
     [[']' ], 1],
     
     [['const ', ['programs', 'b'], '= [' ], 1],
     [['"', ['Git, Trello, Slack', 'p'], '",' ], 2],
     [['"', ['Wordpress, Squarespace, Wix', 'p'], '",' ], 2],
     [['"', ['Illustrator, Photoshop, Premiere Pro', 'p'], '"' ], 2],
     [[']' ], 1],

     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
