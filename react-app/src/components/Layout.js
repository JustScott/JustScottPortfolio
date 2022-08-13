/* Import Modules */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

/* Import Local Scripts */
import baseScripts from '../scripts/base.js';

/* Icon Imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";



/* Import Styles */
import '../static/scss/layout.scss';

export default class Layout extends React.Component {
    render() {
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
    return (
        <>
            <div className='navbar' id='navbar'>
                <ExternalLinks />

                <div className='nav_items_container'>
                    <NavbarTextItem link='/posts' name='Posts'/>
                    <NavbarIconItem link='/' icon={faHouse} id='navbar_home_icon'/>
                    <NavbarTextItem link='/' name='Home' id='navbar_home_text'/>
                    <NavbarTextItem link='/projects' name='Projects'/>
                </div>

                <i 
                    className='navbar_open_icon' 
                    onClick={() => openOrCloseNavbar()}>
                        <FontAwesomeIcon icon={faArrowCircleUp}/>
                </i>
            </div>
            <Outlet /> {/* Renders the selected path */}
        </>
    );

    function ExternalLinks() {
        return (
            <div className="navbar_external_links">
                <Link 
                    href='https://www.linkedin.com'
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

    function NavbarTextItem(props) {
        return (
            <Link 
                to={props.link} 
                className='navbar_text' 
                id={props.id} 
                onClick={() => openOrCloseNavbar()}
                >
                    {props.name}
            </Link>
        );
    }
    function NavbarIconItem(props) {
        return (
            <Link to={props.link} id={props.id}>
                <FontAwesomeIcon className='icon' icon={props.icon} />
            </Link>
        );
    }

    function openOrCloseNavbar() {
        let navbarContainer = document.querySelector('#navbar');
        const navbarHeight = navbarContainer.getBoundingClientRect().height;


        if (navbarHeight === 50) {
            maximizeMobileNavbar()
        }else {
            minimizeMobileNavbar()
        }

        function maximizeMobileNavbar() {
            let navbarContainer = document.querySelector('#navbar');
            let navbarItemsContainer = document.querySelector('.nav_items_container');
            let navbarIcon = document.querySelector('.navbar_open_icon');
            let navbarLinks = document.querySelector('.navbar_external_links');

            // Maximize the Navbar
            navbarContainer.style.height = '100vh';
            navbarIcon.style.animationName = 'downArrow';

            // Display the Navigation Links
            navbarItemsContainer.style.animationName = 'showText';

            // Display the External Links
            navbarLinks.style.animationName = 'showText';
        }

        function minimizeMobileNavbar() {
            let navbarContainer = document.querySelector('#navbar');
            let navbarItemsContainer = document.querySelector('.nav_items_container');
            let navbarIcon = document.querySelector('.navbar_open_icon');
            let navbarLinks = document.querySelector('.navbar_external_links');

            // Minimize the Navbar
            navbarContainer.style.height = '50px';
            navbarIcon.style.animationName = 'upArrow';

            // Hide the Navigation Links
            navbarItemsContainer.style.animationName = 'hideText';

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
                    <h1>Email Me!</h1>
                    <div className='email_link_container' onClick={() => baseScripts.copyText('text_to_copy')}>
                        <span className="tool_tip_text" id="tool_tip_text">Copy to clipboard</span>
                        <p id='text_to_copy' className='text_to_copy'>justscott@email.com</p>
                        <FontAwesomeIcon icon={faCopy}/>
                    </div>
                    <input type='text' id='sendersEmail' placeholder='Your Email Address...' maxLength='400' required />
                    <input type='text' id='subject' placeholder='Subject...' maxLength='200' required />
                    <textarea id='body' placeholder='Body...' maxLength='5000' required></textarea>
                    <div className='contact_form_buttons_container'>
                        <button onClick={() => sendEmail()}>Send</button>
                    </div>
                </div>
            </>
        );
        function sendEmail() {
            const sendersEmail = document.querySelector('#sendersEmail');
            const subject = document.querySelector('#subject');
            const body = document.querySelector('#body');

            // Send message to express backend, to email to me
            axios.post('http://localhost:5000/api/contact', {
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
        formElement.style.left = '-50%';
    }
    
    function displayContactForm() {
        let backgroundElement = document.querySelector('#contact_form_background');
        backgroundElement.style.display = 'block';	
    
        let formElement = document.querySelector('#contact_form'); 
        formElement.style.left = '50%';
    }
}

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_external_links">
                <Link 
                    href='https://www.github.com/JustScott'
                    icon={faLinkedin}
                />
                <Link 
                    href='https://www.github.com/JustScott'
                    icon={faGithub}
                />
            </div>
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
