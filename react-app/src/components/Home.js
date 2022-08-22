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
            <img src='headshot.png' alt='Me' className='intro_img_mobile'/>
            <img src='bodyshot.jpg' alt='Me' className='intro_img_desktop'/>
            <div className='text_side'>
                <p className='desktop_about_text'>
                    I'm <b>Scott</b>, a <b>Full Stack Web Developer</b> utilizing <b>React</b> and <b>NodeJS</b> to create  
                    <b> Modern, Fast, Responsive</b>, and <b>Minimalistic</b>, websites.
                </p>
                <p className='mobile_about_text'>
                    I'm <b>Scott</b>. I create <b> Modern</b>, <b>Fast</b>, <b>Responsive</b>, and <b>Minimalistic</b>, websites.
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
                <img src='node_logo.png' alt='Node Logo' onClick={() => {updateText('Node')}}/>
                <img src='react_logo.png' alt='React Logo' onClick={() => {updateText('React')}}/>
                <img src='sass_logo.png' alt='Sass Logo' onClick={() => {updateText('Sass')}}/>
                <img src='mysql_logo.png' alt='MySQL Logo' onClick={() => {updateText('MySQL')}}/>
                <img src='mongodb_logo.png' alt='MongoDB Logo' onClick={() => {updateText('MongoDB')}}/>
                <img src='aws_logo.png' alt='AWS Logo' onClick={() => {updateText('AWS')}}/>
                <img src='linux_logo.png' alt='Linux Logo' onClick={() => {updateText('Linux')}}/>
            </div>
        </div>
    );

    function updateText(skill) {
        const skills = {
            'Python': 
                `
                Python was my first language, and I've uploaded a few packages to the python package index.
                `,
            'Node': 
                `
                Node allows me to use my javascript skills on the server side.
                `,
            'React': 
                `
                React is my go-to tool for front-end development!
                `,
            'Sass': 
                `
                Sass makes my css development much more efficient.
                `,
            'MySQL': 
                `
                MySQL is a great tool for structure data storage!
                `,
            'MongoDB': 
                `
                MongoDB is a great tool for fast, unstructured data storage!
                `,
            'AWS': 
                `
                AWS is used everywhere, thats why I'm working towards the 'Cloud Practitioner' certification!
                `,
            'Linux': 
                `
                I've used Linux as a daily driver for years now, its an integral part of my workflow!
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

        if (window.screen.width < 750) {
            if (animations.checkInView(container)) {
                arrow.style['-webkit-animation-name'] = 'floating-arrow';
                arrow.addEventListener("animationend", () => {
                    arrow.style.display = 'none';
                });
            }else {
                setTimeout(() => {
                    arrow.style.display = 'flex';
                }, 1000)
            }
        }

        window.addEventListener('scroll', () => {
            const container = document.querySelector('#projects_section');
            const arrow = document.querySelector('#floating_arrow');

            if (window.screen.width < 750) {
                if (animations.checkInView(container)) {
                    arrow.style['-webkit-animation-name'] = 'floating-arrow';
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
