import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        var style = {
            position: 'absolute',
            bottom: '0',
            width: '100%',
            textAlign: 'center'
        }

        return <div style={style}>
                Copyright @Jordan Hubbard
            </div>
        }
}

export default Footer;