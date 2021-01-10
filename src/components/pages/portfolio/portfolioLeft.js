import React from 'react';
import {Link} from 'react-router-dom'
import ImageGalleryItem from './gallery/imageGalleryItem';
import axios from 'axios'
import apiPath from '../../functionality/api'
import {curr_user} from '../../functionality/user'


export default class PortfolioLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    selectImage = (image) => {
      this.props.functions.selectImage(image)
    }

    addProject = () => {
      let data = {project_name: "something", project_description: "something",}
      
      axios.post(apiPath('/projects'), data)
          .then(res => {
              this.props.loadPage()
          })
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

        {curr_user ? 
        <span onClick={this.addProject} className="fas fa-plus"></span> : "" }

        <div style={{height: '100%'}}>
        {
            projects.slice(startPosition, endPosition).map(item => (item ?
                <ImageGalleryItem loadPage={this.props.loadPage} focusId={focusImage.project_id} key={item.id} project={item} selectImage={this.selectImage} />
                : ""
            ))
        }
        </div>


            <span onClick={this.props.functions.previousPage} style={{cursor:"pointer"}} className="arrow left-arrow">  {
                page > 1 ?
                <span className="fas fa-chevron-left"></span>
            : " "
          }
            </span>

        Page { page } of { totalPages }

            <span onClick={this.props.functions.advancePage} data-pages={totalPages} style={{cursor:"pointer"}} className="arrow right-arrow">
                    {
                      page < totalPages ?
              <span className="fas fa-chevron-right"></span>
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
