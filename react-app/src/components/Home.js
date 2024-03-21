/* Third Party Imports */
import React, { useEffect, useState } from 'react';

/* Icon Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faArrowRightLong,
    faLock,
    faFlagCheckered,
    faDisplay,
    faClock,
    faHandPointUp,
} from "@fortawesome/free-solid-svg-icons";

import { 
    faLinux,
} from "@fortawesome/free-brands-svg-icons";



import { faGithub } from "@fortawesome/free-brands-svg-icons";

import animations from '../scripts/inViewAnimation';

/* Styles */
import '../static/scss/home.scss';


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
                    I'm <b>Scott</b>, a previously high-level only developer, but I'm now diving into low level development.
                </p>
                <p className='mobile_about_text'>
                    I'm <b>Scott</b>, a previously high-level only developer, but I'm now diving into low level development.
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
                <img src='c-original.svg' alt='C Logo' onClick={() => {updateText('C')}}/>
                <img src='c-original.svg' alt='C++ Logo' onClick={() => {updateText('C++')}}/>
                <img src='c-original.svg' alt='Rust Logo' onClick={() => {updateText('Rust')}}/>
                <img src='linode.svg' alt='Linode Logo' onClick={() => {updateText('Linode')}}/>
                <img src='linux_logo.png' alt='Linux Logo' onClick={() => {updateText('Linux')}}/>
                <img src='linux_logo.png' alt='Bash Logo' onClick={() => {updateText('Bash')}}/>
            </div>
        </div>
    );

    function updateText(skill) {
        const skills = {
            'Python':  
                <p className='selected_item_text'>
                    <b>Python</b> has been my favorite programming language for years now
                    because of its dead simple syntax and incredible flexibility.
                </p>,
            'C':
                <p className='selected_item_text'>
                    I'm currently using <b>C</b> to learn about low level memory management.
                </p>,
            'C++':
                <p className='selected_item_text'>
                    I've been tinkering with <b>C++</b> so I can contribute upstream to 
                    <a href="https://github.com/InfiniTimeOrg/InfiniTime">Infinitime</a>, an
                    open source firmware for the <a href="https://wiki.pine64.org/index.php/PineTime">pinetime</a>
                    smartwatch. I've also got my own fork that I run on my pinetime,
                    <a href="https://github.com/JustScott/InfiniTime">here</a>.
                </p>,
            'Rust':
                <p className='selected_item_text'>
                    I tried <b>Rust</b> in the past... but I couldn't get into. However, now that
                    I'm starting to understand low level memory management risks, and how amazing it is to
                    have a build tool like cargo, I'm learning rust as fast as I can.
                </p>,
            'Linode': 
                <p className='selected_item_text'>
                    I used to prefer AWS, but I find it hard to feel like I'm keeping my cloud secure with
                    how incredibly large their attack surface is. Since then I've moved to Linode, which
                    provides a much more minimalist UI and robust feature set.
                </p>,
            'Linux': 
                <p className='selected_item_text'>
                    I've developed tools for, and used <b>Linux</b> as a daily driver for years now.
                </p>,
            'Bash': 
                <p className='selected_item_text'>
                    For a long time I had primarily used <b>Python</b> for my scripting 
                    needs, but a few months ago I discovered just how powerful <b>BASH</b>
                    can be, and have now nearly converted all my scripts to it.
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
                title='MiniArch'
                description="A minimal CLI Arch Linux installer"
                icon={faLinux}
                homeLink='https://www.github.com/JustScott/MiniArch'
                homeIcon={faGithub}
            />
            <Project 
                title='Arch-Setup'
                description="A group of smart scripts for setting up my various Arch Linux environemnts for my different use cases"
                icon={faLinux}
                homeLink='https://www.github.com/JustScott/Arch-Setup'
                homeIcon={faGithub}
            />
            <Project 
                title='Arch-Configurations'
                description="All my configuration and dotfiles, with a smart installation script"
                icon={faLinux}
                homeLink='https://www.github.com/JustScott/Arch-Configurations'
                homeIcon={faGithub}
            />
            <Project 
                title='MFA'
                description="A TOTP MFA client for Linux, written in Python"
                icon={faLock}
                homeLink='https://www.github.com/JustScott/mfa'
                homeIcon={faGithub}
            />
            <Project 
                title='Ccheckers'
                description='A simple checkers engine written in C, to teach me the basics of C' 
                icon={faFlagCheckered}
                homeLink='https://www.github.com/JustScott/Ccheckers'
                homeIcon={faGithub}
            />
            <Project 
                title='Infinitime'
                description={<p>My own customized fork of <a href='https://github.com/InfiniTimeOrg/InfiniTime'>Infinitime's</a></p>}
                icon={faClock}
                homeLink='https://www.github.com/JustScott/Infinitime'
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
