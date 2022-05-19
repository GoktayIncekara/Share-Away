import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#4FBDBA",
        border: '2px solid #AEFEFF',
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        margin: "10px 20px",
        width: "100px",
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
const PopupButton = styled.button`
    font-size: "10px",
    backgroundColor: "#FFF",
`

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
const ButtonWrapper = styled.div`
    display: flexbox;
    align-items: space-evenly;
    justify-content: center;
    width: 100%;
`

const Brand = styled.h1`
    font-size: 2vw;
    font-weight: 700;
    color: #4FBDBA;
`
const Wrapper = styled.div`
    width: 40%;
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
const HaveAccount = styled.span`
    font-size: 15px;
    margin: 15px 0 0 0;
    font-weight: 600;
    display: "flex";
    justify-content: "center;
`

const Register = () => {

    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { username, name, surname, email, password, address };
        console.log(newUser);

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => console.log(res.data));

        setName('');
        setUsername('');
        setSurname('');
        setEmail('');
        setPassword('');
        setAddress('');
        setConfirmPassword('');

    }
    const resetForm = () => {
        setName('');
        setUsername('');
        setSurname('');
        setEmail('');
        setPassword('');
        setAddress('');
        setConfirmPassword('');
    }



    return (
        <main>
            <Container>
                <BrandWrapper>
                    <Brand>SHARE AWAY</Brand>
                </BrandWrapper>
                <Wrapper>

                    <Title> CREATE AN ACCOUNT</Title>

                    <Form onSubmit={handleSubmit}>

                        <Input placeholder="Name" required type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <Input placeholder="Last Name" type="text" required value={surname} onChange={(e) => setSurname(e.target.value)} />

                        <Input placeholder="Username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />

                        <Input placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Input placeholder="Confirm Password" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <a target="_blank" href={`https://docs.google.com/document/d/1dSqpJOFqWAyWr2gBuFPgYGB-7TlK-V1BpOqEAhaKpFM/edit?usp=sharing`}>Privacy Policy </a>
                        </Agreement>
                        <ButtonWrapper>
                            <Button type="submit" className={classes.button} sx={{ width: 'auto' }}>Register</Button>
                            <Button type="reset" onClick={() => resetForm()} className={classes.button}>Reset</Button>
                        </ButtonWrapper>
                        <HaveAccount>
                            Already have an account? <Link to={`/login`}>Log in</Link>
                        </HaveAccount>

                    </Form>
                </Wrapper>
            </Container>
        </main>
    )
}
export default Register