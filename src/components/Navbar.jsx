import styled from 'styled-components'
import logoImage from "../pictures/s.png"
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { mobile } from "../responsive"
import React from 'react';
import { Link, useNavigate } from "react-router-dom"

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
            height: "30px",
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
    cursor: pointer;
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
    const classes = useStyles();
    const navigate = useNavigate();
    const LogOut = () => {
        localStorage.removeItem('token')
        navigate('/login', { replace: true })
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
                    <MenuItem>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() => LogOut()}
                        >
                            Sign Out
                        </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            endIcon={<AddIcon />}
                        >
                            Add Item
                        </Button>
                    </MenuItem>
                    <Link style={{ textDecoration: 'none' }} to={`/Profile`}>
                        <MenuItem>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                endIcon={<PersonIcon />}
                            >
                                My Profile
                            </Button>
                        </MenuItem>
                    </Link>
                </Right>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;