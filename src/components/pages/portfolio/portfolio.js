import React from 'react';

import PortfolioLeft from './portfolioLeft'
import PortfolioRight from './portfolioRight'

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return  this.props.side === "left" ?
      <PortfolioLeft loadPage={this.props.loadPage} details={this.props.details} functions={this.props.functions} />
      : <PortfolioRight details={this.props.details} />
  }

}
