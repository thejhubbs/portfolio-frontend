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
        return this.props.focusId == this.props.project.project_id
    }

    render() {

      const selected = this.isSelected()

      const project = this.props.project
        var style = {
            margin: "1%",
            width: '100%',
            padding:'1%',
            height: "25vh",
            display: 'inline-block',
            cursor: "pointer",
            
            borderRadius: "10px",
            backgroundImage: `url('${project.image_url}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
        }

        return <div className="individualProject target" onClick={this.selectImage} style={ style }>
          <b><u>{ project.project_name }</u></b><br />

          <div className=""> { project.project_description }</div>
        </div>
    }

}

export default ImageGalleryItem;
