import React from 'react';

import 'bulma/css/bulma.css'


const NavBar = () => {
    return (
        <nav>
            <div>
                <div>
                    <a href="/" >Home</a> 
                    <a href="/merchandise">Merchandise</a>
                    <a href="/schedule">Schedules</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;