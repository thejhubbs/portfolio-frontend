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

import Login from '../functionality/login'

import qs from 'qs'
import axios from 'axios'

import apiPath from '../functionality/api'

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
      let page = this.state.page - 1
      if(page < 1) { page = 1 }
      this.setState({page: page})
    }

    advancePage = (e) => {
      let total = Number.parseInt(e.target.getAttribute('data-pages'))
      let page = this.state.page + 1
      if(page > total) { page = total }
      this.setState({page: page})
    }

    selectImage = async (image) => {
        const fullImage = await axios.get(apiPath(`/projects/${image.project_id}`))
        this.setState({focusImage: fullImage.data});
    }

    loadPage = async () => {
      const response = await axios.get(apiPath('/projects'))
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
          {path: "/resume", RightComponent: ProfessionalRight, LeftComponent: ProfessionalLeft},
          {path: "/login", RightComponent: Login, LeftComponent: Login},
        ]

        

        return <Container fluid="true" style={{overflow:'hidden'}} >
          <Row>
            <Col xl='4' lg='5' xs='12' className="page-body-bg">
              <div className="page-body" >
                <Header auth={this.props.auth} />
                <Switch>
                    {
                      pages.map(({path, LeftComponent}) => <Route key={path} exact path={path}>
                          {({ match }) => (
                            <CSSTransition appear={true} enter={true} exit={true} in={match != null} timeout={1000} classNames="fadePagesMin" unmountOnExit>
                                <div key={path} className="fadePages fp-bottom">
                                  { path === '/portfolio' ? <LeftComponent loadPage={this.loadPage} auth={this.props.auth} side={"left"} details={this.state} functions={functions} /> : <LeftComponent   auth={this.props.auth} /> }
                                </div>
                              </CSSTransition>
                            )}
                        </Route>
                      )
                    }
              </Switch>

              </div>
            </Col>
            <Col xl='8' lg='7' xs='12' className="extra-window-bg" style={{ padding:"0" }}>
              <div className="extra-window bg-overlay">
                {
                  pages.map(({path, RightComponent}) => <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition in={match != null} timeout={300} classNames="fadePagesWindow" unmountOnExit>
                            <div className="fadePages">
                              { path === '/portfolio' ? <RightComponent  auth={this.props.auth} side={"right"} details={this.state} functions={functions} /> : <RightComponent   auth={this.props.auth} /> }
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
