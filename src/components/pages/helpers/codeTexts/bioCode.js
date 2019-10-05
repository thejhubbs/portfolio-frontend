import React from 'react'

function BioCode() {
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
      <span className='tfs'>const</span> <span className='tfb tfc-b'>Personal</span> = {'{'}<br />
    
      &nbsp; &nbsp; &nbsp; &nbsp; <span className="tfc-b tfb">hobbies:</span> [<br/> 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfs">Music, Guitar, Signing</span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfb">Art, Painting, <span class="tfs">Drawing</span></span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g"> </span>"<br />
      &nbsp; &nbsp; &nbsp; &nbsp; ],<br />
      &nbsp; &nbsp; &nbsp; &nbsp; <span className="tfc-b tfb">skills:</span> [<br/> 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfs">Design & Marketing</span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfb">Interpersonal <span class="tfs">& Leadership</span></span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g"> </span>"<br />
      &nbsp; &nbsp; &nbsp; &nbsp; ],<br />
      &nbsp; &nbsp; &nbsp; &nbsp; <span className="tfc-b tfb">facts:</span> [<br/> 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfs">Spiritual; Buddhist; Christian</span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfb"><span class="tfs">Loves</span> animals</span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g"> </span>"<br />
      &nbsp; &nbsp; &nbsp; &nbsp; ]<br />
      {'}'}
    </h3>
    </div>
}


export default BioCode