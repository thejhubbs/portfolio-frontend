import React from 'react';

class ImageGalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    selectImage = () => {
        this.props.selectImage(this.props.project)
    }

    isSelected = () => {
        return this.props.focusId === this.props.project.project_id
    }

    render() {
        var style = {
            margin: "10px",
            width: '40%',
            display: 'inline-block'
        }
        return <div onClick={this.selectImage} style={ style }>
          <img width='100px' src={"nope.jpg"} /><br />
          { this.props.project.project_name }<br />
          { this.props.project.project_description }<br />
        </div>
    }

}

export default ImageGalleryItem;
