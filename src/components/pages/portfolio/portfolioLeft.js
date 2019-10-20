import React from 'react';
import {Link} from 'react-router-dom'
import ImageGalleryItem from './gallery/imageGalleryItem';


export default class PortfolioLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    selectImage = (image) => {
      this.props.functions.selectImage(image)
    }

    render() {
      const {page, projects, focusImage} = this.props.details;

      const endItem = page * 4 //4, 8, 12
      const startPosition = endItem - 4 //0, 4, 8
      const endPosition = endItem //4, 8, 12- but not included in return
      const totalPages = Math.ceil( projects.length / 4 )


        return  <div>

        <div style={{display:'flex',flexWrap:'wrap'}}>
        {
            projects.slice(startPosition, endPosition).map(item => (item ?
                <ImageGalleryItem focusId={focusImage.project_id} key={item.id} project={item} selectImage={this.selectImage} />
                : ""
            ))
        }
        </div>

        {
          page > 1 ?
            <span onClick={this.props.functions.previousPage} style={{cursor:"pointer"}}> {'<'} </span>
          : ""
        }

        { page } / { totalPages }

        {
          page < totalPages ?
            <span onClick={this.props.functions.advancePage} style={{cursor:"pointer"}}> {'>'} </span>
          : ""
        }

        <div>
            <Link className="page-button" to="/professional">Skills & Languages</Link>
            <Link className="page-button" to="/contact">Contact</Link>
        </div>
        </div>
    }
}
