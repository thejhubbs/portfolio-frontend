import React from 'react'
import displayLines from './textDisplay'
function Code() {
    //These are arrays that make up a line. If the array element is a string, it's grey, but if its a subarray, the text is the color of the the other element.
    const lines = [
     [['function ', ['Contact() ', 'b'], '{' ], 0],
     [['print "', ['Check me out', 'p'], '";' ], 1],
     [['const links = {' ], 1],
     [[['github', 'b'], ': "', ['thejhubbs', 'p'], '",'], 2],
     [[['linkedIn', 'b'], ': "', ['JordanHubbard', 'p'], '",'], 2],
     [[['email', 'b'], ': "', ['thejhubbs', 'g'], '",'], 2],
     [[['emailProvider', 'b'], ': "', ['gmail', 'g'], '"'], 2],

     [['}' ], 1],
     [['}' ], 0],
    ]

    return <div className={"code-window"}>
      {displayLines(lines)}
    </div>
}


export default Code
