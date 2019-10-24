import React from 'react';
import { Link } from 'react-router-dom'
import BioCode from './personalCode'

export class PersonalLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}

        return <div className="tfc-lg">

                  <h1>//TMI</h1>
                  <BioCode />

                  <div>
                    <Link className="page-button" to="/portfolio">My Portfolio</Link>
                    <Link className="page-button" to="/contact">Contact Me</Link>
                  </div>
                </div>

    }
}
export class PersonalRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {


        var style = {}

        style.icon = {fontSize:'100px',margin:'0',padding:'0',textAlign:'center',color:'white'}

        return <div>
                <h2>My Life & History</h2>
                <h3>Childhood & Computers</h3>
                <p>While I was always a fan of tech and computers, in my Junior year of high school, my math teacher assigned an extra credit project in which we were challenged to learn TI-BASIC to program our calculators
                    to do the quadratic formula. I fell in love with the power, and started writing functional programs left and right for every class I could. This was also the year
                    I started taking the Website course, learning HTML & CSS.</p>

                <h3>Websites & Startups</h3>
                <p>I went to The Ohio State University for Computer Science & Engineering. I had serveral website ideas I wanted to create, and building on my HTML & CSS skills, I learned PHP.
                    and took a fascination with web development. I was taught Ruby on Rails in an elective, and started using that in my personal development.
                    I was a Developer in two different startups, and developed the web portion of their products.</p>

                <h3>Art & Music</h3>
                <p>I have been playing guitar since 6th grade and drawing since 7th. I started painting 5 years ago now, and started creating digital music, learning how to use a Digital Audio Workstation (DAW), 2 years ago.
                I've written my own music both on guitar and in DAW's.</p>
            </div>

    }
}
