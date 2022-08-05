/* Import Modules */
import React from 'react';

/* Import Styles */
import '../static/scss/resume.scss';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ResumeContainer />
        );
    };
}

function Container(props) {
    return (
        
    );
}

function HeaderSection(props) {
    return (

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

        );
    }
    function Links(props) {
        return (

        );
    }
}
