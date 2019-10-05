import React from 'react';
import Header from './components/main/header';
import Body from './components/main/body';
import Footer from './components/main/footer';

import './App.scss';
import pageInfo from "./components/pages/pageinfo";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: {
        path: "/",
        bg: "selfie",
        size: "small"
      }
    }
    this.imgStr = require(`./img/${ this.state.page.bg }.jpg`);
  }

  //The Overall HOC here & change "App" bg
  pageChange = (page) => {
    this.setState({page: page});
  }

  componentDidUpdate = () => {
    var app = document.querySelector(".App");
    app.style.background = `url("${this.imgStr}")`;
    app.style.backgroundSize = "cover";
  }

  render() {
    this.imgStr = require(`./img/${ this.state.page.bg }.jpg`);

    return (
      <div>
        <Header />
        <div className="App">
          <div className="AppOverlay">
          <Body pageChange={this.pageChange} page={this.state.page} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
