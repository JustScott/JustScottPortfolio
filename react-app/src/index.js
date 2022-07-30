/* Impot Modules */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Import Components */
import Layout from './components/Layout.js';
import Home from './components/Home.js';
import NoPage from './components/NoPage.js';

/* Import Scripts */
import animateOnView from './scripts/inViewAnimation.js';

/* Import Styles */
import './static/scss/index.scss'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
        animateOnView();
        window.addEventListener('scroll', animateOnView)
    }

	render() {
		return (
			<>
				<BrowserRouter>
      				<Routes>
						<Route path="/" element={<Layout />}>
					  		<Route index element={<Home />} />
					  		<Route path="*" element={<NoPage />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</>
		);
	};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
