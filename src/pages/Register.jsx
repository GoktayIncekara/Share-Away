import React from 'react';
import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";

import ProfilePlaceHolder from '../pictures/user.png'
import axios from 'axios';

import CameraAltIcon from '@mui/icons-material/CameraAlt';

//------------------------------------
const useStylesImg = makeStyles((theme) => ({
    button: {
        backgroundColor: "#072227",

        borderRadius: "20px",
        fontWeight: "900",
        fontSize: "12px",
        margin: "10px 10px",
        width: "30px",
        height: "35px",
        color: 'white',
        '&:hover': {
            backgroundColor: "#072227",

            color: "white",
        },
        [theme.breakpoints.down("sm")]: {
            height: "40px",
            width: "auto"
        }
    }

}));



const ContainerImg = styled.div`
    width: 25vw;
    height: 15vw;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
    padding: 10px 20px;
    margin: 5px 0 8px 6vw;
    display: block;
  `
const ImgHolder = styled.div`
      margin: auto;
      width: 200px;
      height: 200px;
        border-radius: 50%;
      border-radius: 5px;
      margin-top: 0.5rem;
      display: flex;
    justify-content: center;
  `
const ImageUpload = styled.label`
      margin: auto;
      width: 200px;
      height: 35px;
      color: white;
      border-radius: 20px;
      background-color: #072227;
      text-align: center;
      cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
  `
const UploadLabel = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
  `
const Img = styled.img`
      width: 8vw;
    height: 8vw;
      border-radius: 50%;
  
  `


const InputImg = styled.input.attrs({
    type: 'file',
})`
  
      display: none;
    `

//---------------------------

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

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(255,255,255,0.2),
        rgba(255,255,255,0.2)
    ),
    url("https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg") center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const BrandWrapper = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    height: 7vh;
    width: 42vw;
    background-color: #072227;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
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
    display: flex;
    align-items: center;
    flex-direction: column;
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
const Error = styled.span`
    font-size: 15px;
    margin: 15px 0 10px 0;
    font-weight: 600;
    display: "flex";
    color: red;
    justify-content: "center;
`
const Register = () => {
    
    const classes = useStyles();
    const navigate = useNavigate();
    const classesImg = useStylesImg();
    const [profileImg, setProfileImg] = useState(ProfilePlaceHolder)

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const imageHandler = (e) => {

        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
                setProfilePic(e.target.files[0])
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const RemovePicture = () => {
        setProfileImg(ProfilePlaceHolder)
        setProfilePic(ProfilePlaceHolder)
    }


    async function handleRegister(e) {

        e.preventDefault()
        /* if (localStorage.hasOwnProperty("profilePic") != null) {
            setProfilePic(localStorage.getItem("profilePic"))
            //console.log(profilePic)
        }
        if (localStorage.hasOwnProperty("profilePic") === null) {
            setProfilePic(ProfilePlaceHolder)
            //console.log(profilePic)
        } */

        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            resetPassword()

        }
        else if (password.length < 6) {
            alert("Password should be minimum 6 characters long!")
            resetPassword() 
        }
        else if (username.length < 5) {
            alert("Username should be minimum 5 characters long!")
            resetPassword() 
        }
        else if (name.length < 3) {
            alert("Name should be minimum 2 characters long!")
            resetPassword()
        }
        else if (surname.length < 3) {
            alert("Surname should be minimum 2 characters long!")
            resetPassword()
        }
        else {

            const formData = new FormData();

            formData.append('username', username);
            formData.append('name', name);
            formData.append('surname', surname);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('profilePic', profilePic);

            /* const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    name,
                    surname,
                    email,
                    password,
                    profilePic,
                }),
            }); */

            const response = await axios.post('http://localhost:5000/user/register', formData)


            /* const response = await fetch('http://localhost:5000/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            }); */

            console.log("from frontend: " + response.data.status + " end of frontend")
            /* const data = await response.json()

            if (data.status === 'ok') {
                resetForm();
                navigate('/login');
            }
            if (data.status === 'Error') {
                setErrorMessage("Email or username is already used! Please try again!")
            } */
            if (response.data.status == 'ok') {
                setName('');
                setUsername('');
                setSurname('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setProfilePic(ProfilePlaceHolder);
                navigate('/login');
            }
            if (response.data.status == 'error') {
                setErrorMessage("Email or username is already used! Please try again!")
            }
        }
    }

    const resetPassword = () =>{
        setPassword('');
        setConfirmPassword('');
    }

    const resetForm = () => {
        setName('');
        setUsername('');
        setSurname('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setProfilePic(ProfilePlaceHolder);
    }




    return (
        <main>
            <Container>
                <BrandWrapper>
                    <Brand>SHARE AWAY</Brand>
                </BrandWrapper>
                <Wrapper>


                    <Title> CREATE AN ACCOUNT</Title>


                    <Form onSubmit={handleRegister} encType='multipart/form-data'>

                        <ContainerImg>
                            <UploadLabel >
                                <ImageUpload htmlFor="input">
                                    <CameraAltIcon sx={{ margin: "10px" }} /> <h5>Choose Photo</h5>

                                </ImageUpload>
                                <Button type="reset" onClick={() => RemovePicture()} className={classesImg.button}>X</Button>
                            </UploadLabel>

                            <ImgHolder>
                                <Img src={profileImg} alt="" id="img" className="img" />
                            </ImgHolder>
                            <InputImg type="file" accept=".png, .jpg, .jpeg" name="profilePic" id="input" onChange={imageHandler} />
                        </ContainerImg>

                        <Input placeholder="Name" required type="text" value={name} onChange={(e) => setName(e.target.value)} />

                        <Input placeholder="Last Name" type="text" required value={surname} onChange={(e) => setSurname(e.target.value)} />

                        <Input placeholder="Username" type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />

                        <Input placeholder="Email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                        <Input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />

                        <Input placeholder="Confirm Password" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <a style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" href={`https://docs.google.com/document/d/1dSqpJOFqWAyWr2gBuFPgYGB-7TlK-V1BpOqEAhaKpFM/edit?usp=sharing`}>Privacy Policy </a>
                        </Agreement>
                        <Error> {errorMessage} </Error>
                        <ButtonWrapper>
                            <Button type="submit" className={classes.button} sx={{ width: 'auto' }}>Register</Button>
                            <Button type="reset" onClick={() => resetForm()} className={classes.button}>Reset</Button>
                        </ButtonWrapper>
                        <HaveAccount>
                            Already have an account? <Link to={`/login`} style={{ textDecoration: 'none' }}>Log in</Link>
                        </HaveAccount>

                    </Form>
                </Wrapper>
            </Container>
        </main>
    )
}
export default Register