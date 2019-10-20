import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap'
import {Link, withRouter} from 'react-router-dom'

import Header from './header'

import {HomeLeft, HomeRight} from '../pages/home/home'
import {ContactLeft, ContactRight} from '../pages/contact/contact'
import {PersonalLeft, PersonalRight} from '../pages/personal/personal'
import ProfessionalLeft from '../pages/professional/professionalLeft'
import ProfessionalRight from '../pages/professional/professionalRight'
import Portfolio from '../pages/portfolio/portfolio'

import qs from 'qs'
import axios from 'axios'

import {TransitionGroup, CSSTransition} from 'react-transition-group'

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          projects: [],
          focusImage: {},
          page: 1,
          lastQuery: 0
        }
    }

    componentDidMount = () => {
      this.loadPage()
    }

    componentDidUpdate = () => {
        const query = qs.parse(this.props.location.search.substr(1))
        if(query && query.project && query.project != this.state.focusImage.project_id && query.project != this.state.lastQuery){
          this.setState({lastQuery: query.project})
          this.selectImage({project_id: query.project})
        }
    }

    previousPage = () => {
      this.setState({page: this.state.page-1})
    }

    advancePage = () => {
      this.setState({page: this.state.page+1})
    }

    selectImage = async (image) => {
        const fullImage = await axios.get(`http://localhost:4222/api/projects/${image.project_id}`)
        this.setState({focusImage: fullImage.data});
    }

    loadPage = async () => {
      const response = await axios.get('http://localhost:4222/api/projects')
      const query = qs.parse(this.props.location.search.substr(1))
      if(query && query.project) {
        this.selectImage({project_id: query.project})
      } else {
        this.selectImage({project_id: response.data[0].project_id})
      }
      this.setState({projects: response.data})
    }

    render(){
        const functions = {previousPage: this.previousPage, advancePage: this.advancePage, selectImage: this.selectImage}
        const pages = [
          {path: "/", RightComponent: HomeRight, LeftComponent: HomeLeft},
          {path: "/contact", RightComponent: ContactRight, LeftComponent: ContactLeft},
          {path: "/personal", RightComponent: PersonalRight, LeftComponent: PersonalLeft},
          {path: "/portfolio", RightComponent: Portfolio, LeftComponent: Portfolio},
          {path: "/professional", RightComponent: ProfessionalRight, LeftComponent: ProfessionalLeft},
        ]

        const pageIndexNum = ['/', '/contact', '/personal', '/portfolio', '/professional'].indexOf(this.props.location.pathname)
        const bgImg = ['selfie.jpg', 'bg3.jpg', 'bg5.jpg', 'bg8.jpg', 'bg2.jpg'][pageIndexNum]


        return <Container fluid="true">
          <Row>
            <Col xl='4' xs='12' className="page-body-bg">
              <div className="page-body" >
                <Header />

                    {
                      pages.map(({path, LeftComponent}) => <Route key={path} exact path={path}>
                          {({ match }) => (
                            <CSSTransition in={match != null} timeout={1000} classNames="fadePagesMin" unmountOnExit>
                                <div className="fadePages fp-bottom">
                                  { path === '/portfolio' ? <LeftComponent side={"left"} details={this.state} functions={functions} /> : <LeftComponent /> }
                                </div>
                              </CSSTransition>
                            )}
                        </Route>
                      )
                    }

              </div>
            </Col>
            <Col xl='8' xs='12' className="extra-window-bg" style={{padding:"0", backgroundImage: `url(${require(`../../img/${bgImg}`)})` }}>
              <div className="extra-window bg-overlay">
                {
                  pages.map(({path, RightComponent}) => <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition in={match != null} timeout={300} classNames="fadePagesWindow" unmountOnExit>
                            <div className="fadePages">
                              { path === '/portfolio' ? <RightComponent side={"right"} details={this.state} functions={functions} /> : <RightComponent /> }
                            </div>
                          </CSSTransition>
                        )}
                    </Route>
                  )
                }


              </div>
            </Col>
          </Row>
        </Container>
    }
}

export default withRouter(Body);
