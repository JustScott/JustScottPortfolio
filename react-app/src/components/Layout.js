/* Import Modules */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

/* Import Local Scripts */
import base from '../scripts/base';
import distanceFiller from '../scripts/navigation';

/* Icon Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 
    { 
        faAddressCard, 
        faListUl,
        faCode, 
        faComment, 
        faCopy, 
        faArrowCircleUp 
    } 
    from "@fortawesome/free-solid-svg-icons";


import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


/* Import Styles */
import '../static/scss/layout.scss';

export default class Layout extends React.Component {
    render() {
        document.title = 'Home';

        return (
            <>
                <Navbar />
                <Contact />
                <Footer />
            </>
        );
    }
};

function Navbar() {

    useEffect(() => {
        /* On the initial page load */
        distanceFiller('home_icon', 'intro_section', 'distance_filler');

        const projectsSection = document.getElementById('projects_section');
        const projectsSectionTop = projectsSection.getBoundingClientRect().top;

        window.addEventListener('scroll', () => {
            distanceFiller('home_icon', 'intro_section', 'distance_filler');
            distanceFiller('skills_icon', 'skills_section', 'distance_filler')
            distanceFiller('projects_icon', 'projects_section', 'distance_filler', projectsSectionTop);
        })
    })

    return (
        <>
            <div className='navbar_mobile' id='navbar'>
                <ExternalLinks />
                    <a 
                    className="copyright-notice-mobile" 
                    href='https://github.com/JustScott/PortfolioWebsite/blob/main/LICENSE'
                    > Copyright (c) 2022 Scott
                </a>

                <div className='nav_items_container'>
                    <a href='#intro_section' onClick={() => openOrCloseNavbar()}>Intro</a>
                    <a href='#skills_section' onClick={() => openOrCloseNavbar()}>Skills</a>
                    <a href='#projects_section' onClick={() => openOrCloseNavbar()}>Projects</a>
                </div>

                <i 
                    className='navbar_open_icon' 
                    onClick={() => openOrCloseNavbar()}>
                        <FontAwesomeIcon icon={faArrowCircleUp}/>
                </i>
            </div>
            <Outlet /> {/* Renders the selected path */}

            <div className='navbar_desktop' id='navbar'>
                <span className='distance_container'>
                    <span className='distance_filler' id='distance_filler'></span>
                </span>

                <div className='icons_container'>
                    <i className='icon_container' id='home_icon' onClick={() => {
                        document.querySelector('#intro_section').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <FontAwesomeIcon icon={faAddressCard}/>
                    </i>

                    <i className='icon_container' id='skills_icon'  onClick={() => {
                        document.querySelector('#skills_section').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <FontAwesomeIcon icon={faListUl}/>
                    </i>

                    <i className='icon_container' id='projects_icon' onClick={() => {
                        document.querySelector('#projects_section').scrollIntoView({ behavior: 'smooth' });
                    }}>
                        <FontAwesomeIcon icon={faCode}/>
                    </i>
                </div>
            </div>
        </>
    );

    function ExternalLinks() {
        return (
            <div className="navbar_external_links">
                <Link 
                    href='https://www.linkedin.com/in/scottawyman/'
                    icon={faLinkedin}
                />
                <Link 
                    href='https://www.github.com/JustScott'
                    icon={faGithub}
                />
            </div>
        );

        function Link(props) {
            return (
                <a href={props.href}>
                    <FontAwesomeIcon icon={props.icon} className='external_link' />
                </a>
            );
        }
    }

    function openOrCloseNavbar() {
        let navbarContainer = document.querySelector('#navbar');
        const navbarHeight = navbarContainer.getBoundingClientRect().height;


        if (navbarHeight === 80) {
            maximizeMobileNavbar()
        }else {
            minimizeMobileNavbar()
        }

        function maximizeMobileNavbar() {
            let navbarContainer = document.querySelector('#navbar');
            let navbarItemsContainer = document.querySelector('.nav_items_container');
            let navbarIcon = document.querySelector('.navbar_open_icon');
            let navbarLinks = document.querySelector('.navbar_external_links');
            let copyrightNotice = document.querySelector('.copyright-notice-mobile');

            // Maximize the Navbar
            navbarContainer.style.height = '100%';
            navbarContainer.style.borderRadius = 0;
            navbarIcon.style.animationName = 'downArrow';

            // Display the Navigation Links
            navbarItemsContainer.style.animationName = 'showText';

            // Display the copyright notice
            copyrightNotice.style.animationName = 'showCopyright';

            // Display the External Links
            navbarLinks.style.animationName = 'showText';
        }

        function minimizeMobileNavbar() {
            let navbarContainer = document.querySelector('#navbar');
            let navbarItemsContainer = document.querySelector('.nav_items_container');
            let navbarIcon = document.querySelector('.navbar_open_icon');
            let navbarLinks = document.querySelector('.navbar_external_links');
            let copyrightNotice = document.querySelector('.copyright-notice-mobile');

            // Minimize the Navbar
            navbarContainer.style.height = '80px';
            navbarContainer.style.borderTopLeftRadius = '50%';
            navbarContainer.style.borderTopRightRadius = '50%';
            navbarIcon.style.animationName = 'upArrow';

            // Hide the Navigation Links
            navbarItemsContainer.style.animationName = 'hideText';

            // Hide the copyright notice
            copyrightNotice.style.animationName = 'hideCopyright';

            // Hide the External Links
            navbarLinks.style.animationName = 'hideText';
        }
    }
}

function Contact() {
    return (
        <>
            <Form />
            <Bubble />
        </>
    );

    function Form() {
        return (
            <>
                <p 
                    id='success_message' 
                    onClick={() => {
                        document.querySelector('#success_message').style.display = 'none';
                    }}
                    >Success!
                </p>
                <p 
                    id='error_message' 
                    onClick={() => {
                        document.querySelector('#error_message').style.display = 'none';
                    }}
                    >Error!
                </p>
                <div id='contact_form_background' className='contact_form_background' onClick={() => hideContactForm()}></div>
                <div id='contact_form' className="contact_form">
                    <p className='contact_heading'>Contact Me!</p>
                    <div className='contact_info_container'>
                        <p className="tool_tip_text" id="tool_tip_text">Copy to Clipboard</p>
                        <span className='contact_info_item' onClick={() => base.copyText('email')}>
                            <input type='text' className='contact_info_text' id='email' size='19' readOnly value='business@scottwyman.me'/> 
                            <FontAwesomeIcon icon={faCopy}/>
                        </span>
                        <span className='contact_info_item' onClick={() => base.copyText('number')}>
                            <input type='text' className='contact_info_text' id='number' size='10' readOnly value='402-270-9644'/>
                            <FontAwesomeIcon icon={faCopy}/>
                        </span>
                    </div>
                    <input type='text' className='contact_input' id='sendersEmail' placeholder='Your Contact Info...' maxLength='400' required />
                    <input type='text' id='subject' className='contact_input' placeholder='Subject...' maxLength='200' required />
                    <textarea id='body' placeholder='Body...' maxLength='5000' required></textarea>
                    <span className='button_container'>
                        <button onClick={() => sendEmail()}>Send</button>
                    </span>
                </div>
            </>
        );
        function sendEmail() {
            const sendersEmail = document.querySelector('#sendersEmail');
            const subject = document.querySelector('#subject');
            const body = document.querySelector('#body');

            // Send message to express backend, to email to me
            axios.post('https://www.scottwyman.me/api/contact', {
                sendersEmail: sendersEmail.value,
                subject: subject.value,
                body: body.value,
            }).then(function (response) {
                let confirmationDialog = document.querySelector('#success_message');

                // Show the success message element
                confirmationDialog.style.display = 'block';

                // Remove it after 4 seconds
                setTimeout(() => {
                    confirmationDialog.style.display = 'none';
                }, 4000);
            })
            .catch(function (error) {
                let confirmationDialog = document.querySelector('#error_message');

                // Show the error message element
                confirmationDialog.style.display = 'block';

                // Remove it after 4 seconds
                setTimeout(() => {
                    confirmationDialog.style.display = 'none';
                }, 4000);
            });

            // Clear the forms fields
            sendersEmail.value = '';
            subject.value = '';
            body.value = '';

            hideContactForm()
        }
    }
    function Bubble() {
        return (
            <div className='contact_bubble' onClick={() => displayContactForm()}>
                <FontAwesomeIcon icon={faComment} className='contact_icon'/>
            </div>
        );
    }

    function hideContactForm() {
        let backgroundElement = document.querySelector('#contact_form_background');
        backgroundElement.style.display = 'none';
        
        let formElement = document.querySelector('#contact_form');
        formElement.style.opacity = '0';
        formElement.style.left = '-50%';
    }
    function displayContactForm() {
        let backgroundElement = document.querySelector('#contact_form_background');
        backgroundElement.style.display = 'block';	
    
        let formElement = document.querySelector('#contact_form'); 
        formElement.style.opacity = '1';
        formElement.style.left = '50%';
    }
}

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer_external_links">
                <Link 
                    href='https://www.linkedin.com/in/scottawyman/'
                    icon={faLinkedin}
                />
                <Link 
                    href='https://www.github.com/JustScott'
                    icon={faGithub}
                />
            </div>
            <a 
                className="copyright-notice-desktop" 
                href='https://github.com/JustScott/PortfolioWebsite/blob/main/LICENSE'
                > Copyright (c) 2022 Scott
            </a>
        </div>
    );

    function Link(props) {
        return (
            <a href={props.href}>
                <FontAwesomeIcon icon={props.icon} className='footer_link' />
            </a>
        );
    }
}
