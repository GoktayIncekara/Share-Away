import styled from "styled-components"
import { mobile } from "../responsive"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import UserShortInfo from "./UserShortInfo";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        width: "100%",

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color: "white",
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "160px"
        }

    },
    icon: {
        marginRight: '10px',
        color: "#555555",
    },
}));

const Wrapper = styled.div`
    padding: 10vh;
    padding-top: 15vh;
    display:flex;
    ${mobile({ flexDirection: "column" })};
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.18);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vh;
`
const Image = styled.img`
    height: 25vw;
    width: 25vw;
    align-items: center;
    ${mobile({ height: "30vh" })};
`

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 50px;
    ${mobile({ textAlign: "left" })};
    ${mobile({ padding: "0px" })};
    ${mobile({ marginTop: "10px" })};
`
const Title = styled.h1`
    color: #072227;
    margin-bottom: 10px;
    padding-bottom: 30px;
    font-size: 50px;
`


const IconStyle = styled.p`
    color: gray;
    display: flex;
`
const UserContainer = styled.div``

const ProductDetail = () => {

    const location = useLocation();
    const classes = useStyles();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    //const [user, setUser] = useState({});

    /*
     useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await axios.get('http://localhost:5000/products/' + id);
                setProduct(res.data)
            } catch (error) { }
        };
        getProduct()

        const getUser = async () => {
            try {
              const res = await axios.get( 'http://localhost:5000/user/' + product.username);
              setUser(res.data)
            } catch (error) {}
          };
        getUser() 

    }, []) 

    */
    const getUsers = async () => {
        const res = await axios.get('http://localhost:5000/products/' + id);
        setProduct(res.data)
    };

    useEffect(() => {
        getUsers();
    }, [id]);


    //console.log(product)
    //console.log(user)

    const crDate = String(product.createdAt).split('T')[0]
    const emailtosend = "mailto:" + product.email

    return (
        <Wrapper>
            <ImgContainer>
                {/* <ProductSlider product={id}/> */}
                 <Image src={require('../pictures/' + localStorage.getItem('currentPhoto'))} alt="" id="img" /> 
            </ImgContainer>
            <InfoContainer>
                <Title>{/* {currentItem.name} */} {product.title}</Title>

                <IconStyle> <LocationOnIcon className={classes.icon} />
                    Location: {product.district}, {product.city}</IconStyle>
                <IconStyle> <CalendarTodayIcon className={classes.icon} /> Published Day: {crDate} </IconStyle>

                <IconStyle> <LocalShippingIcon className={classes.icon} /> Shipping Options:  {product.shipping}
                </IconStyle>

            {<UserContainer>
                <UserShortInfo username = {product.username}/>  
                <Button href = {emailtosend}
                variant="contained"
                size="large"
                className={classes.button}
                endIcon={<MailOutlineIcon />}
                >Send Message</Button>
            </UserContainer>}  
            
        </InfoContainer>
        </Wrapper>
    )
}

export default ProductDetail
