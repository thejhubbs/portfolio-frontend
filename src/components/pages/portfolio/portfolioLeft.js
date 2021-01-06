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

      const endItem = page * 3 //4, 8, 12
      const startPosition = endItem - 3 //0, 4, 8
      const endPosition = endItem //4, 8, 12- but not included in return
      const totalPages = Math.ceil( projects.length / 3 )


        return  <div>
          <div className="d-block d-sm-none">
            <i>Click on a project to see full details further down below.</i>
          </div>

        <div style={{height: '100%'}}>
        {
            projects.slice(startPosition, endPosition).map(item => (item ?
                <ImageGalleryItem focusId={focusImage.project_id} key={item.id} project={item} selectImage={this.selectImage} />
                : ""
            ))
        }
        </div>


            <span onClick={this.props.functions.previousPage} style={{cursor:"pointer"}} className="arrow left-arrow">  {
                page > 1 ?
              <img height="16px" src={require("../../../img/chevron-left.svg")} alt="left arrow" />
            : " "
          }
            </span>

        Page { page } of { totalPages }

            <span onClick={this.props.functions.advancePage} data-pages={totalPages} style={{cursor:"pointer"}} className="arrow right-arrow">
                    {
                      page < totalPages ?
              <img  src={require("../../../img/chevron-right.svg")} alt="right arrow" />
           : " "
         }
             </span>

        <div>
            <Link className="page-button" to="/resume">Technologies</Link>
            <Link className="page-button pb-primary" to="/contact">Contact</Link>
        </div>
        </div>
    }
}
