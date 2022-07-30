/* Import Modules */
import React from 'react';

/* Import Styles */
import '../static/scss/home.scss';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		return (
			<>
			    <Intro />
            </>
		);
	}
}


function Intro(props) {
    return (
        <div className='intro_container'>
            <img className='intro_image' src='bodyshot.jpg' alt='Portrait of Me'></img>
            <div className='text_button_container'>
                <p className='intro_text'> My names Scott, I'm a self-taught MERN Stack Web Developer.</p>
                <button className='intro_button'>Resume</button>
            </div>
        </div>
    );
}


