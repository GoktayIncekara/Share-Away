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
        rgba(255,255,255,0.4),
        rgba(255,255,255,0.4)
    ),
    url("https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2020/04/18074111/T2020-302-20-DS-At-Home-with-Studios-Website_1280x550_HOME-1024x616.jpg") 
    center no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    width: 25%;
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
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: teal;
`
const Login = () => {
  const classes = useStyles();
  return (
    <Container>
      <BrandWrapper>
        <Brand>SHARE AWAY</Brand>
      </BrandWrapper>
      <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button className={classes.button}>LOGIN</Button>
                <Link>DON'T YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login