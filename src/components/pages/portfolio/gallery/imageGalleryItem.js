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

        var style = {
            margin: "10px",
            width: '40%',
            padding:'10px',
            display: 'inline-block',
            cursor: "pointer",
            borderTop: `2px solid ${selected ? '#02080d' : 'transparent' }`,
            borderBottom: `2px solid ${selected ? '#02080d' : 'transparent' }`,
            background: selected ? "linear-gradient(transparent, rgba(255,255,255,.3), transparent)" : "transparent"
        }
        const project = this.props.project

        return <div onClick={this.selectImage} style={ style }>
          <img width='150px' src={project.image_url ? project.image_url : ""} /><br />
          <b>{ project.project_name }</b><br />
          { project.project_description }<br />
        </div>
    }

}

export default ImageGalleryItem;
