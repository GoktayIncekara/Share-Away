//import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import logoImage from "../pictures/s.png"
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#35858B"
    },
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color:"white",
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "160px"
        }

    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        fontSize: "15px",
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    
}));

const Left= styled.div`
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
`
const MenuItem = styled.div`
    margin-left: 25px;

`

const Navbar = () => {
    const classes = useStyles();
    return (
      <AppBar>
          <Toolbar className= {classes.toolbar}>
              <Left>
                  <LogoImage src={logoImage} ></LogoImage>
                  <Typography variant="h6" className={classes.logoLg}>
                      Share Away
                  </Typography>
                  <Typography variant="h6" className={classes.logoSm}>
                      ShareAway
                  </Typography>
              </Left>
              <Right>
                  <MenuItem>
                      <Button
                          variant="contained"
                          size="large"
                          className={classes.button}
                          endIcon={<AddIcon/>}
                      >
                      Add Item
                      </Button>
                  </MenuItem>
                  <MenuItem>
                      <Button
                          variant="contained"
                          size="large"
                          className={classes.button}
                          endIcon={<PersonIcon/>}
                      >
                      My Profile
                      </Button>
                  </MenuItem>
              </Right>
          </Toolbar>
      </AppBar>
      
    )
  }

export default Navbar;