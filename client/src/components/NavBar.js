import React from 'react';
import 'bulma/css/bulma.css'


const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            {/* <div class="navbar-brand">
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div> */}
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="/" >Home</a>
                    <a class="navbar-item" href="/merchandise">Merchandise</a>
                    <a class="navbar-item" href="/merchandise">Schedules</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;