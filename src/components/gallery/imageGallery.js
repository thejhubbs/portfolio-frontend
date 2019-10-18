import React from 'react';
import ImageGalleryItem from './imageGalleryItem';
import ImageFocusItem from './imageFocusItem';
import {Link, withRouter } from "react-router-dom"
import axios from 'axios'
import qs from 'qs'

class ImageGallery extends React.Component {
    //Limit to 4/page with some arrows
    constructor(props){
        super(props);
        this.state = {
            focusImage: {},
            page: 1
        }
    }

    selectImage = async (image) => {
        const fullImage = await axios.get(`http://localhost:4222/api/projects/${image.project_id}`)
        this.setState({focusImage: fullImage.data});
    }

    updateGalleryNew = (image) => {
        var images = this.props.projects;
        images.push({...image, id: images.length+1});
        this.setState({images: images});
    }

    componentDidMount = () => {
      const query = qs.parse(this.props.location.search.substr(1))

      if(query && query.project) {
          this.selectImage({project_id: query.project})
      }
    }

    previousPage = () => {
      this.setState({page: this.state.page-1})
    }

    advancePage = () => {
      this.setState({page: this.state.page+1})
    }

    render() {
        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}
        style.width = {width: "450px"}

        const endItem = this.state.page * 4 //4, 8, 12
        const startPosition = endItem - 4 //0, 4, 8
        const endPosition = endItem //4, 8, 12- but not included in return
        const totalPages = Math.ceil( this.props.projects.length / 4 )

        return <div className="page-overview">
            <div className="page-body-bg" style={style.width} >
                <div className="page-body" style={style.width} >
                    <div>

                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        this.props.projects.slice(startPosition, endPosition).map(item => (item ?
                            <ImageGalleryItem focusId={this.state.focusImage.project_id} key={item.id} project={item} selectImage={this.selectImage} />
                            : ""
                        ))
                    }
                    </div>

                    {
                      this.state.page > 1 ?
                        <span onClick={this.previousPage}> {'<'} </span>
                      : ""
                    }

                    { this.state.page } / { totalPages }

                    {
                      this.state.page < totalPages ?
                        <span onClick={this.advancePage}> {'>'} </span>
                      : ""
                    }

                    <div>
                        <Link className="page-button" to="/about">About Me</Link>
                        <Link className="page-button" to="/contact">Contact</Link>
                    </div>

                    </div>
                </div>
            </div>

            <div class="extra-window">
                { Object.keys(this.state.focusImage).length > 1 ?
                <ImageFocusItem project={this.state.focusImage} />
                : "Please select a project to view more details about it."
                }
            </div>
            </div>

    }
}

export default withRouter(ImageGallery)
