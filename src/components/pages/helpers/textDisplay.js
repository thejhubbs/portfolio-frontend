import React from 'react'

export function displayText (text_arr, indent, lineNumber) {
  let returnString = "<span class='tfc-dg'>" + lineNumber + "|" + "</span>";
  for(let i=0; i < indent * 4; i++) {
    returnString += "&nbsp;"
  }

  text_arr.forEach(item => {
    if(Array.isArray(item)) {
      returnString += `<span class='tfc-${item[1]}'>${item[0]}</span>`
    } else {
      returnString += item
    }
  })

  return returnString
}


export default function printLines (lines) {
  return <div>

  {
    lines.map((line, lineNumber) =>
      <h5 className='code-line' dangerouslySetInnerHTML={{__html: displayText(line[0], line[1], lineNumber)}}></h5>
    )
  }

  </div>

}
