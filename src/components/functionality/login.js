import axios from "axios"
import React from "react"
import apiPath from '../functionality/api'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: "",
                password: ""
            },
            message: null,
            response: null
        }
    }

    updateUsername = (e) => {
        this.setState({ form: { ...this.state.form, username: e.target.value } })
    }

    updatePassword = (e) => {
        this.setState({ form: { ...this.state.form, password: e.target.value } })

    }

    submitForm = (e) => {
        e.preventDefault()
        axios.post(apiPath('/users/login'), this.state.form)
            .then(res => {
                this.props.auth.login(res.data.user, res.data.token)
                this.setState({ message: res.message })
            })
            .catch(err => {
                
                this.setState({ message: err.message })

            })
    }

    
    createNew = (e) => {
        e.preventDefault()
        axios.post(apiPath('/users'), this.state.form)
            .then(res => {
                console.log(res)
                this.setState({ message: res.message })
            })
            .catch(err => {
                
                this.setState({ message: err.message })

            })
    }

    render() {
        return <div>
            <p>{this.state.message}</p>
            <form onSubmit={this.submitForm} >
                <input type="text" value={this.state.form.username} onChange={this.updateUsername} />
                <input type="password" value={this.state.form.password} onChange={this.updatePassword} />
                <button type="submit">Login</button>
            </form>

            
            <form onSubmit={this.createNew} >
                <input type="text" value={this.state.form.username} onChange={this.updateUsername} />
                <input type="password" value={this.state.form.password} onChange={this.updatePassword} />
                <button type="submit">Create New</button>
            </form>



        </div>
    }

}

export default Login