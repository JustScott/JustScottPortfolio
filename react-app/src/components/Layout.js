/* Import Modules */
import React from 'react';
import { Outlet, Link } from "react-router-dom";

/* Import Styles */
import '../static/scss/navbar.scss';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className='navbar'>
                    <NavbarItem link='/' name='Home'/>
                </div>            
            <Outlet /> {/* Renders the selected path */}
            </>
        );
    }
};

function NavbarItem(props) {
    return (
        <Link to={props.link} className='nav_item_text'>{props.name}</Link>
    );
}
