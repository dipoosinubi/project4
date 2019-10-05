import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;