import React from 'react';
import {Link} from 'react-router-dom'

import ImageFocusItem from './gallery/imageFocusItem';


export default class ImageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render() {
        const {page, projects, focusImage} = this.props.details;


        return <div id="portfolio">

                { Object.keys(focusImage).length > 1 ?
                <ImageFocusItem project={focusImage} />

                : "Loading..."
                }

          </div>

    }
}
