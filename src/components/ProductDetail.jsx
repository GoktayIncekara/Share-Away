import styled from "styled-components"
import {mobile} from "../responsive"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, makeStyles} from '@material-ui/core';
import React from 'react';
import { useParams } from "react-router-dom";
import { popularProducts } from "../data"
import ProductSlider from './ProductSlider'
import UserShortInfo from "./UserShortInfo";
import {users} from "../data"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



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

    }  
}));

const Wrapper = styled.div`
    padding: 10vh;
    padding-top: 15vh;
    display:flex;
    ${mobile({flexDirection: "column"})};
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
    flex: 1;
    padding: 0px 50px;
    ${mobile({textAlign: "left"})};
    ${mobile({padding: "0px"})};
    ${mobile({marginTop: "10px"})};
`
const AdInfo =styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

`

const Title = styled.h1`
    color: #35858B;
`

const Location = styled.p`
    display: inline-flex;
    align-items: flex-end;
    color: gray;
`
const UploadDate = styled.p`
    display: inline-block;
    color: gray;
`

const Desc = styled.p`
    margin: 20px 0px;
`
const ShipInfo = styled.p`
    color: gray;
    display: flex;


`
const UserContainer = styled.div ``


const ProductDetail = () =>{
    const { id } = useParams()
    let currentItem = popularProducts.find(item => item.id === parseInt(id));
    let currentUser = users.find(user => user.id === currentItem.userId);

    console.log(currentItem);
    const classes = useStyles();
    return(
        <Wrapper>
        <ImgContainer>
            <ProductSlider product={currentItem}/>
        </ImgContainer>
        <InfoContainer>
            <Title>{currentItem.name}</Title>
            <AdInfo>
            <Location> {<LocationOnIcon/>}  {currentUser.district}, {currentUser.city}</Location>
            <UploadDate> {currentItem.uploadDate} </UploadDate>
            </AdInfo>
            <ShipInfo> {<LocalShippingIcon />} Shipping Options:  {currentItem.shipping.toString()}
            </ShipInfo>
            <Desc>{currentItem.desc}</Desc>
            <UserContainer>
                <UserShortInfo userId = {currentItem.userId} />
                <Button
                variant="contained"
                size="large"
                className={classes.button}
                endIcon={<MailOutlineIcon />}
                >Send Message</Button>
            </UserContainer>
            
        </InfoContainer>
        </Wrapper>
    )
}

export default ProductDetail
