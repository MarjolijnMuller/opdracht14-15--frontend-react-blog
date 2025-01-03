import React from 'react';
import './Navigation.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-medium.png'

function Navigation() {
    return (
        <nav>
            <img src={logo} alt="Company logo" className="logo"/>
            <ul className="Navigation">
                <li className="NavigationItem">
                    <NavLink to='/'
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Home
                    </NavLink>
                </li>
                <li className="NavigationItem">
                    <NavLink to='/alle-posts'
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Alle posts
                    </NavLink>
                </li>
                <li className="NavigationItem">
                    <NavLink to="/nieuwe-post-maken"
                             className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>
                        Nieuwe post maken
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;