import React from 'react';
import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import {cities} from "../data"
import ProductPhotoUpload from "./ProductPhotoUpload";


const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#072227",
        border: '2px solid #4FBDBA',
        color: "white",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "13px",
        margin: "10px 20px",
        width: "250px",
        '&:hover': {
            backgroundColor: "#4FBDBA",
            border: '2px solid #AEFEFF',
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "auto"
        }
    }

}));


const Container = styled.div`
    background-color: rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;

`
const Wrapper = styled.div`
    width: 80%;
    padding: 20px;
    margin: 30px 0;
    background-color: white;
    ${mobile({ width: "75%" })};
`

const ButtonWrapper = styled.div`
    display: flexbox;
    align-items: space-evenly;
    justify-content: center;
    width: 100%;
    margin: 20px;
`



const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #35858B;
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
    border: 2px solid  #35858B;
    border-radius: 30px;
`

const Error = styled.span`
    font-size: 15px;
    margin: 15px 0 10px 0;
    font-weight: 600;
    display: "flex";
    color: red;
    justify-content: "center";
`

const ProductForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [shipping, setShipping] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    async function handleRegister(e) {

        e.preventDefault()

        /*if (password !== confirmPassword) {
            alert("Passwords do not match!")
            setPassword('');
            setConfirmPassword('');

        }
        else {
            const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    name,
                    surname,
                    email,
                    address,
                    password,
                }),
            })

            const data = await response.json()

            if (data.status === 'ok') {
                setName('');
                setUsername('');
                setSurname('');
                setEmail('');
                setPassword('');
                setAddress('');
                setConfirmPassword('');
                navigate('/login');
            }
            if (data.status === 'error') {
                setErrorMessage("Email or username is already used! Please try again!")
            }
        }*/
    }

    const resetForm = () => {
        setImage('');
        setTitle('');
        setDescription('');
        setCategory('');
        setCity('');
        setDistrict('');
        setShipping('');
    }

    return (
        <main>
            <Container>
                <Wrapper>
                    <Title> ADD PRODUCT </Title>

                    <Form onSubmit={handleRegister}>
                   
                        <ProductPhotoUpload />
                        
                        <Input placeholder="Title" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                        <Input placeholder="Description" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} />

                        <Input placeholder="Category" type="text" required value={category} onChange={(e) => setCategory(e.target.value)} />

                        <Input placeholder="City" type="text" required value={city} onChange={(e) => setCity(e.target.value)} />

                        <Input placeholder="District" type="text" required value={district} onChange={(e) => setDistrict(e.target.value)} />

                        <Input placeholder="Shipping Options" type="text" required value={shipping} onChange={(e) => setShipping(e.target.value)} />

                    
                        <Error> {errorMessage} </Error>
                        <ButtonWrapper>
                            <Button type="submit" className={classes.button} sx={{ width: 'auto' }}>Publish Product</Button>
                            <Button type="reset" onClick={() => resetForm()} className={classes.button}>Reset</Button>
                        </ButtonWrapper>


                    </Form>
                </Wrapper>
            </Container>
        </main>
    )
}
export default ProductForm