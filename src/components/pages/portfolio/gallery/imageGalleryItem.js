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
            margin: "1%",
            width: '45%',
            padding:'1%',
            display: 'inline-block',
            cursor: "pointer",
            border: '2px solid transparent',
            borderTop: `2px solid ${selected ? '#6bafe8' : 'transparent' }`,
            borderBottom: `2px solid ${selected ? '#6bafe8' : 'transparent' }`,
            borderRadius: "10px",
            background: selected ? "linear-gradient(transparent, rgba(255,255,255,.3), transparent)" : ""
        }
        const project = this.props.project

        return <div className="individualProject target" onClick={this.selectImage} style={ style }>
          <b><u>{ project.project_name }</u></b><br />
          <img height="50px" src={project.image_url ? project.image_url : ""} /><br />
          { project.live_link ? <a className='d-none d-sm-inline viewgit-link view' href={project.live_link} target="_blank">Live <img className="viewgit view" src={require("../../../../img/eye.svg")} alt="view" /></a> : '' }
          { project.github_link ? <a className='d-none d-sm-inline viewgit-link git'  href={project.github_link} target="_blank"><img className="viewgit git" src={require("../../../../img/github.png")} alt="github" /> Code</a> : '' }<br className='d-none d-sm-block'  />

          <div className=""> { project.project_description }</div>
        </div>
    }

}

export default ImageGalleryItem;
