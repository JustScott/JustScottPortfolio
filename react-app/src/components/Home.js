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
                <img src='resume.png' alt='My Resume' id='resume'/>
                <Intro />
                <Skills />
                <Projects />
            </>
        );
    }
}


function Intro() {
    return (
        <div className='intro_section' id='intro_section'>
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
                <button onClick={() => {window.print()}}>Resume</button>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div>
            <div className='skills_section' id='skills_section'>
                <div className='selected_item_text_container'>
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
                I've been using python for hobby projects, for a few years now.
                `,
            'Node': 
                `
                While I'm relatively new to node, I've been using/learning Javascript for
                a few years now.
                `,
            'React': 
                `
                React is my go-to tool for front-end development, and I'm learning more
                about it everyday!
                `,
            'Sass': 
                `
                I started with Sass not too long ago, but have been using css for years.
                `,
            'MySQL': 
                `
                MySQL and SQLite3 have been database choice for many small projects over the years.
                `,
            'MongoDB': 
                `
                MongoDB is to new to me, but I'm quite enjoying the ease of use and speed!
                `,
            'AWS': 
                `
                I'm working towards the 'Cloud Practitioner' certifcation, and so far this service
                continues to intrigue and amaze me!
                `,
            'Linux': 
                `
                I've used Linux as a daily driver for years now, it's absolutely my favorite thing, Ever.
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
        window.addEventListener('scroll', () => {
            const container = document.querySelector('#projects_section');
            const arrow = document.querySelector('#floating_arrow');

            if (window.screen.width < 750) {
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
            }
        });
    })

    return (
        <div className='projects_section' id='projects_section'>
            <i className='floating_arrow' id='floating_arrow'><FontAwesomeIcon icon={faArrowRightLong}/></i>
            <Project 
                title='ListCrypt'
                description='ListCrypt is a custom cryptographic algorithm I developed entirely in Python3'
                icon={faLock}
                homeLink='https://www.github.com/JustScott/ListCrypt'
                homeIcon={faGithub}
            />
            <Project 
                title='SuperSockets'
                description="SuperSockets is an easy to use implementation of python's socket library, and includes built in encryption!"
                icon={faWifi}
                homeLink='https://www.github.com/JustScott/SuperSockets'
                homeIcon={faGithub}
            />
            <Project 
                title='JustScottPortfolio' 
                description='This is the website your currently on!'
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
                    <p className='project_description'>{props.description}</p>
                    <a href={props.homeLink} className='project_home_icon_link'><FontAwesomeIcon icon={props.homeIcon}/></a>
                </div>
            </div>
        );
    }
}
