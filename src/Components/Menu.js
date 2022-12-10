
import {AppBar, Toolbar, Container,IconButton, Typography, Button} from '@material-ui/core';
import {ReactComponent as Logo} from '../logo.jpg';
import {useState} from 'react';
const Menu = ({pizza, bebida, addToCart}) => {
    
    return (
        <AppBar position='static' style={{background: 'danger'}}>
            <Toolbar disabbleGutters>
                <Logo sx={{display: {xs: 'none', md: 'flex'}}} />
            </Toolbar>
        </AppBar>
    );
    
}
export default Menu;