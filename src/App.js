import React from 'react';
import Body from './components/main/body';

import './App.scss';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>
        <Body />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto+Condensed|VT323&display=swap" rel="stylesheet" />
      </div>

  }
}

export default App;
