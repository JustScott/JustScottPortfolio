/* Import Modules */
import React from 'react';

/* Import Styles */
import '../static/scss/nopage.scss';


export default class NoPage extends React.Component {
    componentDidMount() {
        document.title = 'You\'re Lost';
    }

    render() {
        return (
            <h1> You Seem to Be Lost </h1>
        );
    }
}
