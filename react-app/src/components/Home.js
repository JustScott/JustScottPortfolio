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

    componentDidMount() {
        document.title = 'Home';
    }

	render() {
		return (
			<>
			    <Intro />
                <Skills />
                <Certifications />
            </>
		);
	}
}


/*
 * The intro container with a portrait, some text about me, and a link to my resume
 */
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


/*
 * Container for the skills section
 */
function Skills(props) {
    return (
        <>
            <Skill 
                title='React' 
                about=<p><b>React</b> is one of my favorite web development tools, because of its efficiency and elegance</p>
                imgPath='react_logo.png'
                imgAlt='The react logo'
            />
            <SkillFlipped
                title='Node.JS'
                about=<p><b>Node.JS</b> allows me to transfer my javascript skills to the backend, utilizing powerful tools like <b>Express</b></p>
                imgPath='nodejs_logo.png'
                imgAlt='The NodeJS logo'
            />
            <Skill
                title='Sass'
                about=<p>Vanilla CSS can get messy fast, thats why I use <b>Sass</b>, a css pre-processer that lets me reuse my styles in a programmatic way</p>
                imgPath='sass_logo.png'
                imgAlt='The Sass logo'
            />
            <SkillDual 
                title='Text Editors'
                about=<p>My preffered text editor is <b>Vim</b> because of its minimalistic style, but <b>VSCode</b> can make development much more quick and visually pleasing</p>
                imgPath='vscode_logo.png'
                imgPath2='vim_logo.png'
                imgAlt='The VSCode logo'
                imgAlt2='The Vim logo'
            />
        </>
    );
}

/*
 * Put an image next to a title and some text, to tell about a skill
 */
function Skill(props) {
    return (
        <div className='skill_container'>
            <img src={props.imgPath} alt={props.imgAlt} />
            <div className='skill_explainer_container'>
                <h1>{props.title}</h1>
                <p>{props.about}</p>
            </div>
        </div>
    );
}

/*
 * The text and image switch sides
 */
function SkillFlipped(props) {
    return (
        <div className='skill_container skill_container_flipped'>
            <div className='skill_explainer_container'>
                <h1>{props.title}</h1>
                <p>{props.about}</p>
            </div>
            <img src={props.imgPath} alt={props.imgAlt} />
        </div>
    );
}

/*
 * Puts an image on both sides of the skill text
 */
function SkillDual(props) {
    return (
        <div className='skill_container skill_container_double'>
            <img src={props.imgPath} alt={props.imgAlt} />
            <div className='skill_explainer_container'>
                <h1>{props.title}</h1>
                <p>{props.about}</p>
            </div>
            <img src={props.imgPath2} alt={props.imgAlt} />
        </div>
    );
}

/*
 * Certifications Section
 */
function Certifications(props) {
    return (
        <div className='certifications_section'>
            <h1>Certifications</h1>
            <div className='certifications_container'>
                <CertificationContent title='AWS' imgPath='aws_logo.png' imgAlt='AWS Logo'/>
                <CertificationContent title='AWS' imgPath='aws_logo.png' imgAlt='AWS Logo'/>
                <CertificationContent title='AWS' imgPath='aws_logo.png' imgAlt='AWS Logo'/>
            </div>
        </div>
    );
}

/*
 * The data within each individual Certification
 */
function CertificationContent(props) {
   return ( 
        <div className="certification">
            <img src={props.imgPath} alt={props.imgAlt} />
            <h2>{props.title}</h2>
        </div>
   );
}



