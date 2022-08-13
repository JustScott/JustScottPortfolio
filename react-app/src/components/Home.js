/* Third Party Imports */
import React from 'react';

/* Styles */
import '../static/scss/home.scss'


export default class Home extends React.Component {
    render() {
        document.title = 'Home';
        return (
            <>
                <Intro />
            </>
        );
    }
}


function Intro(props) {
    return (
        <div className='home_about_container'>
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
                <a href='/resume'><button>Resume</button></a>
            </div>
        </div>
    );
}
