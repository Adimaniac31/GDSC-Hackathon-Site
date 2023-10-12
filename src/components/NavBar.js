import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import "./NavBar.css";


const NavBar = () => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [isTypographyVisible, setIsTypographyVisible] = useState(true);
    const toggleTypographyVisibility = () => {
        setIsTypographyVisible(!isTypographyVisible);
    };
    return (
        <AppBar position="static">
            <Toolbar className='ToolBar'>
                {isMobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleTypographyVisibility}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    null
                )}
                <img src="" alt="GDSC Logo" />
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    GDSC
                </Typography>
                {!isMobile || isTypographyVisible ? (
                    <>
                        <Typography variant="h6" style={{ flexGrow: 1 }} fontFamily={""}>
                            Home
                        </Typography>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Blog
                        </Typography>
                    </>
                ) : null}

                <button color="inherit" className='Button'>Login</button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar