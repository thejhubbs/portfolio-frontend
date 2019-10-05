import React from 'react'

function HomeCode() {
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
      <span className='tfs'>function</span> <span className='tfb tfc-b'>Portfolio()</span> {'{'}<br />
    
      &nbsp; &nbsp; &nbsp; &nbsp; <span className='tfs'>print</span> "<span className='tfvb tfc-p'>Hello</span> world<span className='tfs'>";</span><br />
      &nbsp; &nbsp; &nbsp; &nbsp; const <span className='tfvb tfc-b'>name</span> = 
      <br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span className='tfb tfc-g'>Jordan</span> <span className='tfvb tfc-g'>Hubbard</span>";<br />
      &nbsp; &nbsp; &nbsp; &nbsp; const <span className="tfc-b tfb">role</span> = [<br/> 
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfs">Computer Science & <span class="tfb">Engineering</span></span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g tfb">Full Stack <span class="tfs">Web Developer</span></span>",<br />
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "<span class="tfc-g">Team Leader and Trainer</span>"<br />
      &nbsp; &nbsp; &nbsp; &nbsp; ]<br />
      {'}'}
    </h3>
    </div>
}


export default HomeCode