/* Third Party Imports */
import React, { useEffect } from 'react';

/* Icon Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
    { 
        faArrowRightLong,
        faLock, 
        faWifi,
        faDisplay,
    } 
    from "@fortawesome/free-solid-svg-icons";


import { faGithub } from "@fortawesome/free-brands-svg-icons";

import animations from '../scripts/inViewAnimation';

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


function Intro() {
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
        <div>
            <div className='skills_section' id='skills_section'>
                <div className='selected_item_text_cotainer'>
                    <p className='selected_item_heading'>Click One!</p>
                    <p className='selected_item_text'>Click a Logo to learn more.</p>
                </div>
                <img src='python_logo.png' alt='Python Logo' onClick={() => {updateText('Python')}}/>
                <img src='node_logo.png' alt='Python Logo' onClick={() => {updateText('Node')}}/>
                <img src='react_logo.png' alt='Python Logo' onClick={() => {updateText('React')}}/>
                <img src='sass_logo.png' alt='Python Logo' onClick={() => {updateText('Sass')}}/>
                <img src='mysql_logo.png' alt='Python Logo' onClick={() => {updateText('MySQL')}}/>
                <img src='mongodb_logo.png' alt='Python Logo' onClick={() => {updateText('MongoDB')}}/>
                <img src='aws_logo.png' alt='Python Logo' onClick={() => {updateText('AWS')}}/>
                <img src='linux_logo.png' alt='Python Logo' onClick={() => {updateText('Linux')}}/>
            </div>
        </div>
    );

    function updateText(skill) {
        const skills = {
            'Python': 
                `
                Python is just a hobby at the moment, but I have a made a few projects, and
                hope I can use it professionally in the future!
                `,
            'Node': 
                `
                Node allows me to use javascript everywhere, which is convienient and
                helps me develop my skills quickly.
                `,
            'React': 
                `
                React is my go-to tool for front-end development,
                it makes everything much easier to understand and visualize.
                `,
            'Sass': 
                `
                Sass is a godsend for css development, 
                as it allows me to use programming functionality in my stylesheets!
                `,
            'MySQL': 
                `
                MySQL can be quite intuitive to use in projects that handle a lot of relational data.
                `,
            'MongoDB': 
                `
                MongoDB is my go to tool for quick and effective database management.
                `,
            'AWS': 
                `
                I've received the 'AWS Cloud Practitioner' certification, 
                and truly enjoy using the service!
                `,
            'Linux': 
                `
                I've used Linux as a daily driver for years now.
                `,
        }

        const heading = document.querySelector('.selected_item_heading');
        const description = document.querySelector('.selected_item_text');

        heading.innerHTML = skill;
        description.innerHTML = skills[skill];
    }

}

function Projects() {

    useEffect(() => {
        const container = document.querySelector('#projects_section');
        const arrow = document.querySelector('#floating_arrow');
        window.addEventListener('scroll', () => {

            if (animations.checkInView(container)) {
                arrow.style.animationName = 'floating-arrow';
                arrow.addEventListener("animationend", () => {
                    arrow.style.display = 'none';
                });
            }else {
                setTimeout(() => {
                    arrow.style.display = 'flex';
                }, 1000)
            }
        });
    })

    return (
        <div className='projects_section' id='projects_section'>
            <i className='floating_arrow' id='floating_arrow'><FontAwesomeIcon icon={faArrowRightLong}/></i>
            <Project 
                title='ListCrypt'
                description='ListCrypt is a cryptographic algorithm developed entirely in Python3.'
                icon={faLock}
                homeLink='https://www.github.com/JustScott/ListCrypt'
                homeIcon={faGithub}
            />
            <Project 
                title='SuperSockets'
                description='ListCrypt is a cryptographic algorithm developed entirely in Python3.'
                icon={faWifi}
                homeLink='https://www.github.com/JustScott/SuperSockets'
                homeIcon={faGithub}
            />
            <Project 
                title='JustScottPortfolio' 
                description='ListCrypt is a cryptographic algorithm developed entirely in Python3.'
                icon={faDisplay}
                homeLink='https://www.github.com/JustScott/JustScottPortfolio'
                homeIcon={faGithub}
            />
        </div>
    );

    function Project(props) {
        return (
            <div className='project_container' onMouseOver={() => {
                document.getElementById(props.title).style.animationName = 'cover-container';
            }} onMouseOut={() => {
                document.getElementById(props.title).style.animationName = 'uncover-container';
            }}>
                <p className='project_title'>{props.title}</p>
                <i className='project_icon'><FontAwesomeIcon icon={props.icon}/></i>
                <div className='project_details' id={props.title}>
                    <a href={props.homeLink} className='project_home_icon_link'><FontAwesomeIcon icon={props.homeIcon}/></a>
                    <p className='project_description'>{props.description}</p>
                </div>
            </div>
        );
    }
}