/* Import Modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Import Components */
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import NoPage from './components/NoPage.js';

/* Import Scripts */
import animations from './scripts/inViewAnimation.js';
import baseScripts from './scripts/base.js';

/* Styles */
import './static/scss/index.scss'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}


	componentDidMount() {
		// Shows the loading screen while the site assets load in
		let test = new Promise( resolve => setTimeout(resolve, 700));
		test.then( () => {
			document.querySelector('.loading-screen').style.animationName = 'close_loading_screen';
		});

		// Adds the scroll animation to most elements on the page
        animations.childOpacityToZero();
        animations.animateOnView();
        window.addEventListener('scroll', animations.animateOnView)

		// <Tab> no longer leaves text area when clicked
		baseScripts.fixTextareaBehavior();
    }

	render() {
		return (
			<>
				<BrowserRouter>
      				<Routes>
						<Route path="/" element={<Layout />}> {/* Root Directory*/}
					  		<Route index element={<Home />} /> {/* Initial Directory */}
					  		<Route path="*" element={<NoPage />} /> {/* Catch-All for 404 errors */}
						</Route>
					</Routes>
				</BrowserRouter>
			</>
		);
	};
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);