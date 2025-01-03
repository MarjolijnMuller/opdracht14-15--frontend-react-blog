import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';


function NotFound() {
    return (
        <main>
            <h2>Oops… This page doesn’t exist</h2>
            <p>Take me back to the <Link to='/'>home page.</Link></p>
        </main>
    )
        ;
}

export default NotFound;
