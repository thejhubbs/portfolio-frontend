import React from 'react'

function AboutCode() {
    var style = {}
    style.div = {
        textAlign: "left",
        backgroundColor: 'rgba(56,61,65, .8)',
        padding: '10px',
        borderRadius: '8px'
    }
    style.textFun = {
        margin: '0',
        fontSize: "20px"
    }

    return <div  style={style.div} >
    <h3 style={style.textFun}>
      <span className='tfs'>function</span> <span className='tfb tfc-b'>Professional()</span> {'{'}<br />

      &nbsp; &nbsp; &nbsp; &nbsp; <span className='tfs'>print</span> "<span className='tfvb tfc-p'>Programmer</span>, Engineer<span className='tfs'>";</span><br />

      &nbsp; &nbsp; &nbsp; &nbsp; const <span className='tfvb tfc'>schooling</span> = <br />
      &nbsp; &nbsp; &nbsp; &nbsp; <span className='tf tfc-b'>//Computer Science & Engineering</span><br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ["<span className='tfb tfc-g'>The Ohio State</span> <span className='tfvb tfc-g'>University</span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; <span className='tf tfc-b'>//Web Development</span><br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span className='tfb tfc-g'>Lambda School</span>"];<br />
      &nbsp; &nbsp; &nbsp; &nbsp; <br />
      {'}'}
    </h3>
    </div>
}


export default AboutCode
