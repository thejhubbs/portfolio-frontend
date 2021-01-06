import React from 'react';

class TechItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tech: this.props.tech
        }
    }

    selectTech = () => {
        this.props.selectTech(this.props.tech)
    }

    isSelected = () => {
        return this.props.focusId === this.props.tech.technology_id
    }

    render() {
        var style = {
            margin: "4px",
            display: 'inline-block',
            color: this.props.selected ? "white" : "black"
        }
        return <div onClick={this.selectTech} style={ style }>
          { this.props.tech.technology_name }<br />
        </div>
    }

}

export default TechItem;
