import axios from "axios"
import React from "react"

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
        axios.post('https://jhubbsportfolio.herokuapp.com/api/users/login', this.state.form)
            .then(res => {
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
                <input type="text" value={this.state.username} onChange={this.updateUsername} />
                <input type="password" value={this.state.password} onChange={this.updatePassword} />
                <button type="submit">Login</button>
            </form>



        </div>
    }

}

export default Login