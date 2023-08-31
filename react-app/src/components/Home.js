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
        faKey,
        faHandPointUp,
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
            <img src='headshot.png' alt='Me' className='intro_img_desktop' onLoad={ () => {
                setTimeout( () => {
                    document.querySelector('.loading-screen').style.animationName = 'close_loading_screen';
                }, 700)
            }}/>
            <div className='text_side'>
                <p className='desktop_about_text'>
                    I'm <b>Scott</b>, a <b>Full Stack Web Developer</b>, <b>Python Developer</b> and <b>Linux</b> enthusiast.
                </p>
                <p className='mobile_about_text'>
                    I'm <b>Scott</b>, a <b>Full Stack Web Developer</b>, <b>Python Developer</b> and <b>Linux</b> enthusiast.
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
                <img src='web-development.svg' alt='Node Logo' onClick={() => {updateText('Web Development')}}/>
                <img src='fastapi.svg' alt='React Logo' onClick={() => {updateText('FastAPI')}}/>
                <img src='sass_logo.png' alt='Sass Logo' onClick={() => {updateText('Sass')}}/>
                <img src='mariadb.svg' alt='MySQL Logo' onClick={() => {updateText('MariaDB')}}/>
                <img src='c-original.svg' alt='MongoDB Logo' onClick={() => {updateText('C')}}/>
                <img src='linode.svg' alt='AWS Logo' onClick={() => {updateText('Linode')}}/>
                <img src='linux_logo.png' alt='Linux Logo' onClick={() => {updateText('Linux')}}/>
            </div>
        </div>
    );

    function updateText(skill) {
        const skills = {
            'Python':  
                <p className='selected_item_text'>
                    <b>Python</b> is by far my favorite programming language. I've developed 
                    many applcations and modules available through my <b><a href='https://pypi.org/user/JustScott/'>PYPI Account</a></b>. 
                </p>,
            'Web Development': 
                <p className='selected_item_text'>
                    I started in <b>Web Development</b> with react, but have since then had a change
                    in my programming philosophy towards using a more minimalist tech stack. Now I use
                    FastAPI & Caddy on the backend, with HTML, SCSS, and JavaScript on the frontend.
                </p>,
            'FastAPI': 
                <p className='selected_item_text'>
                    <b>FastAPI</b> is my tool of choice for building APIs as it's fast both in
                    terms of performance and development time.
                </p>,
            'Sass': 
                <p className='selected_item_text'>
                    <b>Sass</b> makes my css development much more efficient.
                </p>,
            'MariaDB': 
                <p className='selected_item_text'>
                    <b>Mariadb</b> has been my primary databasing tool for python projects because of
                    its speed and simplicity.
                </p>,
            'C':
                <p className='selected_item_text'>
                    I'm very new to <b>C</b>, but am currently learning it so that I can contribute 
                    to open source low-level software projects that I use daily.
                </p>,
            'Linode': 
                <p className='selected_item_text'>
                    I use to preffer AWS, but I find it hard to feel like I'm keeping my cloud secure with
                    how incredibly complicated there 'features' and UI are. Since then I've moved to Linode
                    which provides a much more minimalist UI and robust feature set.
                </p>,
            'Linux': 
                <p className='selected_item_text'>
                    I've developed tools for, and used <b>Linux</b> as a daily driver for years now.
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
                title='PortfolioWebsite' 
                description='This is the website your currently on!'
                icon={faDisplay}
                homeLink='https://www.github.com/JustScott/PortfolioWebsite'
                homeIcon={faGithub}
                callToActionMobile={<p className='mobile-project-click-box'>Click To Learn More <FontAwesomeIcon icon={faHandPointUp}/></p>}
                callToActionDesktop={<p className='desktop-project-hover-box'>Hover To Learn More <FontAwesomeIcon icon={faHandPointUp}/></p>}
            />
            <Project 
                title='SuperSockets'
                description="SuperSockets is an easy to use implementation of python's socket library, and includes built in encryption!"
                icon={faWifi}
                homeLink='https://www.github.com/JustScott/SuperSockets'
                homeIcon={faGithub}
            />
            <Project 
                title='ListCrypt'
                description='ListCrypt is a custom cryptographic algorithm I developed in Python3'
                icon={faLock}
                homeLink='https://www.github.com/JustScott/ListCrypt'
                homeIcon={faGithub}
            />
            <Project 
                title='RapidRSA' 
                description={<p>RapidRSA is an easier to use implementation of <a href='https://github.com/Legrandin/pycryptodome'>pycryptodome's</a> RSA module</p>}
                icon={faKey}
                homeLink='https://www.github.com/JustScott/RapidRSA'
                homeIcon={faGithub}
            />
        </div>
    );

    function Project(props) {
        return (
            <div className='project_container' onMouseOver={() => {
                document.getElementById(props.title).style.animationName = 'cover-container';
                document.querySelector('.mobile-project-click-box').style.animationName = 'remove-click-box';
                document.querySelector('.desktop-project-hover-box').style.animationName = 'remove-hover-box';
            }} onMouseOut={() => {
                document.getElementById(props.title).style.animationName = 'uncover-container';
            }}>
                <p className='project_title'>{props.title}</p>
                <i className='project_icon'><FontAwesomeIcon icon={props.icon}/></i>
                {props.callToActionMobile}
                {props.callToActionDesktop}
                <div className='project_details' id={props.title}>
                    <p className='project_description'>{props.description}</p>
                    <a href={props.homeLink} className='project_home_icon_link'><FontAwesomeIcon icon={props.homeIcon}/></a>
                </div>
            </div>
        );
    }
}
