import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import apiPath from '../../../functionality/api'

class ImageFocusItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }


  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  deleteImage = () => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      axios.delete(apiPath(`/images/${this.props.image.image_id}`))
        .then(res => {
          this.props.reload()
        })
    }
  }

  render() {
    const img = this.props.image


    return <span className="focusItemImage">
      <Modal isOpen={this.state.modal} size={"xl"} toggle={this.toggle} >
        <ModalBody>
          <img style={{ maxWidth: '100%', maxHeight: '100%', margin: '5px' }} src={img.image_url} />
        </ModalBody>
        <ModalFooter>
          Click off the modal to close.
                </ModalFooter>
      </Modal>

      <img style={{ maxWidth: '100px', maxHeight: '60px', margin: '5px', cursor: "pointer" }} onClick={this.toggle} src={img.image_url} />

      <span onClick={this.deleteImage}>DELETE</span>
    </span>


  }

}

export default ImageFocusItem;
