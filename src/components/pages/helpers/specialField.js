import React from 'react'
import {curr_user} from '../../functionality/user'

class Field extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggle = () => {
        this.setState({edit: !this.state.edit})
    }

    changeValue = (e) => {
        this.props.changeValue(this.props.name, e.target.value)
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.submitForm()
    }

    render() {
        let value = this.props.item[this.props.name]
        let display = this.props.cb(value)
        return <>
            { this.state.edit ? <form onSubmit={this.submitForm}><input style={{width:'100%'}} onChange={this.changeValue} value={value} /></form> : display }
            { curr_user ? <span onClick={this.toggle}>{value === "" || !value ? this.props.name : "" }e</span> : "" }
        </>
    }
}

export default Field