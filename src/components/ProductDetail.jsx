import styled from "styled-components"
import {mobile} from "../responsive"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, makeStyles} from '@material-ui/core';
import React from 'react';
//import { useParams } from "react-router-dom";
//import { popularProducts } from "../data"
import ProductSlider from './ProductSlider'
import UserShortInfo from "./UserShortInfo";
//import {users} from "../data"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import jwt from 'jsonwebtoken'
import { useNavigate } from "react-router-dom";

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
            color:"white",
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
    ${mobile({flexDirection: "column"})};
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
/*const Image = styled.img`
    height: 80%;
    object-fit: cover;
    align-items: center;
    ${mobile({height: "30vh"})};
`*/

const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    flex: 1;
    padding: 0px 50px;
    ${mobile({textAlign: "left"})};
    ${mobile({padding: "0px"})};
    ${mobile({marginTop: "10px"})};
`
const Title = styled.h1`
    color: #072227;
    margin-bottom: 10px;
    padding-bottom: 30px;
    font-size: 50px;
`
const Desc = styled.p`
    margin: 5px 0px;
`
const SubTitle= styled.h3`
    color:   rgb(53, 133, 139); ;  
`
const IconStyle = styled.p`
    color: gray;
    display: flex;
`
const UserContainer = styled.div ``

const DescrContainer = styled.div`
    margin-top: 5px;
    background-color:  rgb(53, 133, 139, 0.2); 
    border-radius: 10px;
    padding: 10px;
`

const ProductDetail = () =>{

    const location = useLocation();
    const classes = useStyles();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await axios.get('http://localhost:5000/products/' + id);
            setProduct(res.data)
          } catch (error) {}
        };
        getProduct()

        const getUser = async () => {
            try {
              const res = await axios.get( 'http://localhost:5000/user/' + product.username);
              setUser(res.data)
            } catch (error) {}
          };
        getUser()
        
    } , [id])

    console.log(product)
    console.log(user)
    const crDate = String(product.createdAt).split('T')[0]
    console.log(crDate)

    return(
        <Wrapper>
        <ImgContainer>
            {/* <ProductSlider product={id}/> */}
            {/* <Image src={product.productPicture} /> */}
        </ImgContainer>
        <InfoContainer>
            <Title>{/* {currentItem.name} */} {product.title}</Title>

            <IconStyle> <LocationOnIcon  className={classes.icon} /> 
            Location: {product.district}, {product.city}</IconStyle>
            <IconStyle> <CalendarTodayIcon className={classes.icon}  /> Published Day: {crDate} </IconStyle>
           
            <IconStyle> <LocalShippingIcon className={classes.icon} /> Shipping Options:  {product.shipping}
            </IconStyle>

            <DescrContainer>
                <SubTitle>Description:</SubTitle>
                <Desc>{product.description}</Desc>
            </DescrContainer>

            {<UserContainer>
                {/* <UserShortInfo username = {product.username}/>  */}
                <Button
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
