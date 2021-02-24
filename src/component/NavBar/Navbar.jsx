import React from 'react';
import { AppBar, Toolbar, IconButton ,Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart, shoppingCart} from '@material-ui/icons';
// import classes from '*.module.css';
import useStyles from './styles';
import mangoLogo from '../../assets/mangoLogo.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" className="classes.appBar" color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h4" className={classes.title} color="inherit">
                    <img src={mangoLogo} alt="Mangoshop" height="90px" className={classes.image} />
                    MangoShop
                </Typography>
                <div className={classes.grow}/>
                
                {location.pathname === '/' &&(

                <div className={classes.button}>
                
                <IconButton component={Link} to="/cart" aria-label="show cart items" color="inherit">
                    <Badge badgeContent={totalItems} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                
                </div>
                )}
                 <Typography variant="h6" className={classes.title2} component={Link} to="/product" >Boutique</Typography>
                 <Typography variant="h6"  className={classes.title2} component={Link} to="/Contact" >Contact</Typography>
               

            </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
