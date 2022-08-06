/* Import Modules */
import React from 'react';

/* Import Styles */
import '../static/scss/resume.scss';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayResume: 'none',
        };
    }

    render() {
        return (
            <>
                <div 
                    className='resume_background' 
                    id='resume'  
                    style={{opacity: 1,}} 
                    onClick={() => {
                        let resume = document.querySelector('#resume');
                        resume.style.display = 'none';
                    }}
                    >

                    <div className='resume'>
                        <HeaderContainer />
                        <FloatingExplainers />
                    </div>
                </div>
            </>
        );
    };
}


function HeaderContainer(props) {
    return (
        <div className='header_container'>
            <Contact />
            <Picture imgPath='headshot.jpg' imgAlt='My headshot'/>
            <WebsiteLink />
        </div>
    );
    
    function Contact(props) {
        return (
            <div className='contact_container'>
                <span className='contact_overlay'>
                    <p className='contact_overlay_text'></p>
                </span>
                <p className='name'>John Doe</p>
                <p className='location'>USA</p>
                <p className='email'>email@email.com</p>
                <p className='phone_number'>123-456-7890</p>
            </div>
        );
    }
    function Picture(props) {
        return (
            <>
                <img src={props.imgPath} alt={props.imgAlt} className='headshot_img'/>
            </>
        );
    }
    function WebsiteLink(props) {
        return (
            <div className='link_container'>
                <a href='http://www.justscott.me'>My Website</a>
                <img src='my_website_qr.png' alt='QR Code To My Website'/>
            </div>
        );
    }
}

function FloatingExplainers() {
    return (
        <div className='floating_explainers_container'>
            <FloatingCertifications />
            <FloatingAbout />
            <FloatingExperience />
        </div>
    );
}

function FloatingCertifications() {
    return (
        <div className='certifications_container'>
            
        </div>
    );
}

function FloatingAbout() {
    return (
        <div className='about_container'>

        </div>
    );
}

function FloatingExperience() {
    return (
        <div className='experience_container'>
            
        </div>
    );
}