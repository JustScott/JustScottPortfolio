/* Third Party Imports */
import React from 'react';

/* Styles */
import '../static/scss/home.scss'


export default class Home extends React.Component {
    render() {
        document.title = 'Home';
        return (
            <>
                <Intro />
                <Skills />
                <Projects />
            </>
        );
    }
}


function Intro(props) {
    return (
        <div className='home_about_container' id='intro_section'>
            <img src='bodyshot.jpg' alt='Me'/>
            <div className='text_side'>
                <p className='desktop_about_text'>
                    This is filler text about me an what I do, this should be
                    around two sentences long. So that means I need to make this
                    another sentence long just like this.
                </p>
                <p className='mobile_about_text'>
                    This is mobile filler text, that will be much more consice to save
                    space.
                </p>
                <button>Resume</button>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div id='skills_section'></div>
    );
}

function Projects() {
    return (
        <div id='projects_section'></div>
    );
}