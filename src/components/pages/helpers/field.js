import React from 'react'

import { curr_user, token, expireTokenCheck } from '../../../components/functionality/user'

class Field extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            edit: false
        }
    }

    toggle = () => {
        this.setState({ edit: !this.state.edit })
    }

    changeValue = (e) => {
        this.props.changeValue(this.props.name, e.target.value)
    }

    submitForm = async (e) => {
        e.preventDefault()
        await this.props.submitForm()
        this.toggle()
    }

    render() {
        let value = this.props.item[this.props.name]
        return <div>
            {this.state.edit ?
                <form onSubmit={this.submitForm}>
                    <input style={{ width: '100%' }} onChange={this.changeValue} value={value} />
                    <button type="submit" class="fas fa-check"></button>
                    <button onClick={this.toggle} class="fas fa-times"></button>
                </form> :
                <div>
                    {value}
                    {curr_user ?
                        <span onClick={this.toggle}>{value === "" || !value ? this.props.name : ""} {this.state.edit ? <span class="fas fa-times"></span> : <span class="fas fa-edit"></span>} </span>
                        : ""}
                </div>
            }

        </div>
    }
}

export default Field