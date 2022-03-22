import styled from "styled-components"
import Navbar from "../components/Navbar"
import Report from "../components/Report"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Button, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
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

    }  
}));

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 6vh;
    padding-top: 15vh;
    display:flex;
    ${mobile({flexDirection: "column"})};
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "30vh"})};
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({textAlign: "left"})};
    ${mobile({padding: "0px"})};
    ${mobile({marginTop: "10px"})};
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`

const Product = () => {
  const classes = useStyles();
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Beautiful denim jumpsuit for daily usage.</Desc>
                <Button
                variant="contained"
                size="large"
                className={classes.button}
                endIcon={<ContactPageIcon/>}
                >Request It </Button>
            </InfoContainer>
        </Wrapper>
        <Report />
        <Footer />
    </Container>
  )
}

export default Product