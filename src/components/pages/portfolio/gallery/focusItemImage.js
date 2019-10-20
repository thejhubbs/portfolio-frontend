import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ImageFocusItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        }
    }


    toggle = () => {
      this.setState({modal: !this.state.modal});
    }

    render() {
        const img = this.props.image


        return <span>
              <Modal isOpen={this.state.modal} size={"xl"} toggle={this.toggle} >
                <ModalBody>
                  <img style={{maxWidth:'100%', maxHeight:'100%', margin:'5px'}} src={img.image_url} />
                </ModalBody>
                <ModalFooter>
                  Click off the modal to close.
                </ModalFooter>
              </Modal>

              <img style={{maxWidth:'100px', maxHeight:'60px', margin:'5px', cursor: "pointer"}} onClick={this.toggle} src={img.image_url} />
      </span>


    }

}

export default ImageFocusItem;
