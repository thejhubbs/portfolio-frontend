import React from 'react';
import Body from './components/main/body';

import { curr_user, token, expireTokenCheck } from './components/functionality/user'
import apiPath from './components/functionality/api'

import './App.scss';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
			//Logged in user info.
			user: curr_user,
			token: token
		};
  }

  componentDidMount = async () => {
		//This checks to see if a user's login is expired, logs them out, or just goes on. 
    if (curr_user) { if (expireTokenCheck()) { this.logout() } }
  }

  logout = () => {
		localStorage.setItem('user', null);
		localStorage.setItem('token', null);
		this.setState({ user: {}, token: null });
		window.location.replace('/?loggedIn=false');
	};

	login = (user, token) => {
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('token', token);
		this.setState({ user, token });
		this.forceUpdate();
	};

  render() {
    return <div>
		
        <Body auth={ { login: this.login, logout: this.logout} } />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto+Condensed|VT323&display=swap" rel="stylesheet" />
      </div>

  }
}

export default App;
