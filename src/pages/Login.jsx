import React from 'react';
import { useState } from 'react';
import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        marginTop: "10px",
        marginBottom: "10px",

        '&:hover': {
            backgroundColor: "#072227",
            border: '2px solid #4FBDBA',
            color: "white",
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
    url("https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg") 
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
    width: 25vw;
    background-color: #072227;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Brand = styled.h1`
font-size: 2vw;
    font-weight: 700;
    color: #4FBDBA;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    margin-top: 30px;
    background-color: white;
    ${mobile({ width: "75%" })};
`
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
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
const HaveAccount = styled.span`
    font-size: 15px;
    margin: 15px 0 0 0;
    font-weight: 600;
    display: "flex";
    justify-content: "center;
`
/*
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: teal;
`
*/

const Error = styled.span`
    font-size: 15px;
    margin: 15px 0 0 0;
    font-weight: 600;
    display: "flex";
    color: red;
    justify-content: "center;
`

function Login() {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })

        const data = await response.json()

        if (data.status === 'errorUserNotFound') {
            setErrorMessage("Username is not registered! Please try again!")
        }
        else {
            if (data.status === 'ok') {
                localStorage.setItem('token', data.user)
                // alert('Login successful')
                window.location.href = '/homepage'
            } if (data.status === 'errorPasswordDoNotMatch') {
                setErrorMessage("Username and/or Password do not match! Please try again!")
            }
        }

    }

    return (
        <main>
            <Container>
                <BrandWrapper>
                    <Brand>SHARE AWAY</Brand>
                </BrandWrapper>
                <Wrapper>
                    <Title>SIGN IN</Title>
                    <Form onSubmit={loginUser}>
                        <Input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Error> {errorMessage} </Error>

                        <Button type="submit" className={classes.button} sx={{ width: 'auto' }}>Sign In</Button>
        
                        <HaveAccount>
                            Not Registered?<Link to={`/`} style={{ textDecoration: 'none' }} > Create New Account</Link>
                        </HaveAccount>
                    </Form>
                </Wrapper>
            </Container>
        </main>
    )
}

export default Login