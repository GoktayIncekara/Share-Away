import styled from "styled-components"
import {mobile} from "../responsive"
import { Button, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        marginTop:"10px",
        marginBottom:"10px",

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color:"white",
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "auto"
        }

    }  
 
}));

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.2)
    ),
    url("https://media.istockphoto.com/photos/girl-with-megaphone-jumping-and-shouting-picture-id1166716628?k=20&m=1166716628&s=170667a&w=0&h=qcEGmTnQvaC9SZwieMykABjpCbHdMQwITMeEV6BL_DI=") 
    center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const BrandWrapper = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    height: 7vh;
    width: 17vw;
    background-color: #072227;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Brand = styled.h1`
    font-size: 900;
    font-weight: 700;
    color: #4FBDBA;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    margin-top: 30px;
    background-color: white;
    ${mobile({width: "75%"})};
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Register = () => {
  const classes = useStyles();
  return (
    <Container>
        <BrandWrapper>
            <Brand>SHARE AWAY</Brand>
        </BrandWrapper>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button className={classes.button} sx={{ width: 'auto' }}>Register</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register