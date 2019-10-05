import React from 'react'

function ContactCode() {
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
      <span className='tfs'>function</span> <span className='tfb tfc-b'>Contact()</span> {'{'}<br />
    
      &nbsp; &nbsp; &nbsp; &nbsp; <span className='tfs'>print</span> "<span className='tfvb tfc-p'>Check me</span> out<span className='tfs'>";</span><br />
      &nbsp; &nbsp; &nbsp; &nbsp; const <span className='tfvb tfc-b'>links</span> = {"{}"};<br />
      &nbsp; &nbsp; &nbsp; &nbsp; links.github = "<span className='tfb tfc-g'>the</span><span className='tfvb tfc-g'>j</span><span class="tfc-g">hubbs</span>";<br />
      &nbsp; &nbsp; &nbsp; &nbsp; links.<span className="tfc-b tfb">linkedIn</span> = "<span class="tfc-g tfs">Jordan<span class="tfb">Hubbard</span></span>";<br />
      &nbsp; &nbsp; &nbsp; &nbsp; links.<span className="tfc-b tfb">email</span> = "<span class="tfc-g tfs">the<span class="tfb">jhubbs</span></span>";<br />
      &nbsp; &nbsp; &nbsp; &nbsp; links.<span className="tfc-b tfb">emailProvider</span> = "<span class="tfc-g tfs">G<span class="tfb">Mail</span></span>";<br />

      &nbsp; &nbsp; &nbsp; &nbsp; links.hasPreferred ? links.submit()<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : "Leave a Message Over There";<br />
      {'}'}
    </h3>
    </div>
}


export default ContactCode