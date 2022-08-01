/* Import Modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Import Components */
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import NoPage from './components/NoPage.js';

/* Import Scripts */
import base from './scripts/inViewAnimation.js';

/* Import Styles */
import './static/scss/index.scss'

const animateOnView = base.animateOnView;
const childOpacityToZero = base.childOpacityToZero; 


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
        childOpacityToZero();
        animateOnView();
        window.addEventListener('scroll', animateOnView)
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


