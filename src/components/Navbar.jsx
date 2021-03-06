import styled from 'styled-components'
import logoImage from "../pictures/s.png"
import PersonIcon from '@mui/icons-material/Person';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { mobile } from "../responsive"
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import LogoutIcon from '@mui/icons-material/Logout';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import jwt from 'jsonwebtoken'

const useStyles = makeStyles((theme) => ({
    //to arrange the placement of navbar contents
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#35858B"
    },
    button: {
        backgroundColor: "#FFFFFF",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color: "white",
        },
        /*if the screen is smaller than small screen size, then*/
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "160px",
            margin: "5px 0px"
        }

    },
    logoLg: {
        display: "none",
        /*if the screen is bigger than small screen size, then*/
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        fontSize: "15px",
        display: "block",
        //if the screen is bigger than small screen size, then
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },

}));

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const LogoImage = styled.img`
    max-width: 50px;
    margin-right: 10px;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    margin-right: 30px;
    justify-content: flex-end;
    ${mobile({ flexDirection: "column" })};
`
const MenuItem = styled.div`
    margin-left: 25px;

`

const Navbar = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token')

    if (!token) {
        navigate('/', { replace: true })
    }

    const user = jwt.decode(token)
    const classes = useStyles();

    const LogOut = () => {
        localStorage.removeItem('token')
        localStorage.clear()
        navigate('/', { replace: true })
    }

    return (
        <AppBar >
            <Toolbar className={classes.toolbar} style={{
                textDecoration: 'none'
            }}>
                <Left >
                    <Link to={`/homepage`}>
                        <LogoImage src={logoImage} ></LogoImage>
                    </Link>
                    <Link style={{
                        textDecoration: 'none', whiteSpace: 'nowrap', color: 'white'
                    }} to={'/homepage'}>
                        <Typography variant="h6" className={classes.logoLg}>
                            Share Away
                        </Typography>
                    </Link>
                </Left>

                <Right>
                    <Link style={{ textDecoration: 'none' }} to={`/addProduct`}>
                        <MenuItem>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                endIcon={<CameraAltIcon />}
                            >
                                Add Product
                            </Button>
                        </MenuItem>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to={`/Profile`}>
                        <MenuItem>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                endIcon={<PersonIcon />}
                            >
                                {(user != null) ? user.name : ''}
                            </Button>
                        </MenuItem>
                    </Link>

                    <MenuItem>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() => LogOut()}
                        >
                            <LogoutIcon />
                        </Button>
                    </MenuItem>
                    
                </Right>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;