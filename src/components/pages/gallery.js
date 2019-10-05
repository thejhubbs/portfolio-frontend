import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

import ImageGallery from '../gallery/imageGallery';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          projects: []
        }
    }

    componentDidMount = () => {
        this.props.pageChange({
            path: "/gallery",
            bg: "bg2",
            size: "small"
        })
        this.loadPage()
    }

    componentDidUpdate = () => {

    }

    loadPage = async () => {
      const response = await axios.get('http://localhost:4222/api/projects')
      this.setState({projects: response.data})
    }

    render() {
        return  <span><ImageGallery projects={this.state.projects} /></span>
    }
}

export default Gallery;
