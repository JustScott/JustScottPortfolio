/* Third Party Imports */
import React, { useEffect, useState } from 'react';

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
                    <b> Modern</b> and <b>Fast</b>, <b>Minimalistic</b> websites.
                </p>
                <p className='mobile_about_text'>
                    I'm <b>Scott</b>. I create <b> Modern</b> and <b>Fast</b>, <b>Minimalistic</b> websites.
                </p>
                <button onClick={() => {window.print()}}>Resume</button>
            </div>
        </div>
    );
}

function Skills() {
    const [ title, setTitle ] = useState('Click One!');
    const [ description, setDescription ] = useState(
        <p className='selected_item_text'>Click a Logo to learn more.</p>
    );

    return (
        <div>
            <div className='skills_section' id='skills_section'>
                <div className='selected_item_text_container'>
                    <p className='selected_item_heading'><b>{title}</b></p>
                    {description}
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
                <p className='selected_item_text'>
                    <b>Python</b> was my first and favorite language. I have multiple packages available 
                    on my <b><a href='https://pypi.org/user/JustScott/'>PYPI Account</a></b>.
                </p>,
            'Node': 
                <p className='selected_item_text'>
                    <b>Node</b> allows me to create fast, asynchronus API's.
                </p>,
            'React': 
                <p className='selected_item_text'>
                    <b>React</b> is my go-to tool for front-end development!
                </p>,
            'Sass': 
                <p className='selected_item_text'>
                    <b>Sass</b> makes my css development much more efficient.
                </p>,
            'MySQL': 
                <p className='selected_item_text'>
                    <b>MySQL</b> has been my primary databasing tool for python projects.
                </p>,
            'MongoDB': 
                <p className='selected_item_text'>
                    I'm relatively new to <b>MongoDB</b>, but am quickly catching on as I use it in my new projects.
                </p>,
            'AWS': 
                <p className='selected_item_text'>
                    I'm currently working towards the <b>AWS Cloud Practitioner</b> certification!
                </p>,
            'Linux': 
                <p className='selected_item_text'>
                    I've used <b>Linux</b> as a daily driver for years now, it's an <b>integral</b> part of my workflow!
                </p>,
        }

        setTitle(skill);
        setDescription(skills[skill]);

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
        <div className='projects_section' id='projects_section' onScroll={() => {
            document.getElementById('floating_arrow').style.display = 'none';
        }}>
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
