import React from 'react';
import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import {turkeyData} from "../cityDistrict"
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
    flex-direction: column;
    
`


const Error = styled.span`
    font-size: 15px;
    margin: 15px 0 10px 0;
    font-weight: 600;
    display: "flex";
    color: red;
    justify-content: "center";
`
const InputTitle =styled.label`
    font-size: 20px;
    font-weight: 500;
    color: #35858B;
`
const InputBox = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0 10px 0;

`
const Input = styled.input`
    flex: 1;
    width: 85%;
    padding: 5px;
    padding: 10px;
    border: 2px solid  #35858B;
    border-radius: 10px;
`
const Select = styled.select`
    flex: 1;
    min-width: 85%;
    margin: 5px 0;
    padding: 10px;
    border: 2px solid  #35858B;
    border-radius: 10px;
`
const TextArea = styled.textarea`
    flex: 1;
    min-width: 85%;
    margin: 5px 0;
    padding: 10px;
    border: 2px solid  #35858B;
    border-radius: 10px;
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
    const [districtArr, setDistrictArr] = useState([]);
    const [shipping, setShipping] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const CategoryArr = ["Furniture", "Men Clothing", "Women Clothing", "Technology", "Home", "Books", "Baby and Kid", "Fun", "Travel", "School", "Elderly", "Other"];

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
        setTitle('')
        setDescription('')
        setCategory('') 
        setCity('') 
        setDistrict('')
        setDistrictArr([])
        setShipping('')
        
    }
    const changeCity =(e)=>{
        setCity(e.target.value) ;
        setDistrictArr( (turkeyData.find( ( selectedCity ) => selectedCity.il_adi === e.target.value)).ilceler);

    }
    return (
        <main>
            <Container>
                <Wrapper>
                    <Title> ADD PRODUCT </Title>

                    <Form onSubmit={handleRegister}>
                   
                        <ProductPhotoUpload />

                        <InputBox>
                        <InputTitle for="dist">Title</InputTitle>
                        <Input placeholder="Title" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </InputBox>


                        <InputBox>
                        <InputTitle for="dist">Description</InputTitle>
                        <TextArea placeholder="Description" type="textarea" required value={description} onChange={(e) => setDescription(e.target.value)} />
                        </InputBox>

                             
                        <InputBox>
                        <InputTitle for="category">Category</InputTitle>
                        <Select name="categories" id="category" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}  >
                        {CategoryArr.map((item) => (
                             <option value={item}>{item}</option>
                            ))}
                        </Select>
                        </InputBox>

                                                   
                        <InputBox>
                        <InputTitle for="ship">Shipping Options</InputTitle>
                        <Select name="shipping" id="ship" placeholder='Shipping Options' value={shipping} onChange={(e) => setShipping(e.target.value)}  >
                             <option value="cargo">By Cargo</option>
                             <option value="pick-up">Pick up</option>
                             <option value="both">Both Cargo and Pick-up</option>
                        </Select>
                        </InputBox>

                        <InputBox>
                        <InputTitle for="city">City</InputTitle>
                        <Select name="cities" id="city" placeholder='City' value={city} onChange={changeCity}  >
                        {turkeyData.map((item) => (
                             <option value={item.il_adi}>{item.il_adi}</option>
                            ))}
                        </Select>
                        </InputBox>

                        <InputBox>
                        <InputTitle for="dist">District</InputTitle>
                        <Select name="districts" id="dist" placeholder='District' value={district} onChange={(e) => setDistrict(e.target.value)}  >
                            {districtArr.map((item) => (
                                <option value={item.ilce_adi}>{item.ilce_adi}</option>
                                ))}
                        </Select>
                        </InputBox>



                    
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