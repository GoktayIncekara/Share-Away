import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import jwt from 'jsonwebtoken';
import PersonalAdDashboard from './PersonalAdDashboard';
import PassChangeForm from './PassChangeForm';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

import CameraAltIcon from '@mui/icons-material/CameraAlt';

//------------------------------------
const useStylesImg = makeStyles((theme) => ({
    button: {
        backgroundColor: "#072227",

        borderRadius: "20px",
        fontWeight: "700",
        fontSize: "15px",
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
    height: 22vw;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
    padding: 10px 20px;
    margin: 5px 0 8px 2vw;
    display: block;
  `
const ImgHolder = styled.div`
      margin: auto;
      width: 300px;
      height: 300px;
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
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
  
  `


const InputImg = styled.input.attrs({
    type: 'file',
})`
  
      display: none;
    `


const Container = styled.div`
    margin-top: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px;
`
const InfoContainer = styled.div`
    margin: 10px 0 0 0;
    display:flex;
    flex-direction: column;
`
const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;  
    padding: 30px;
    margin-top: 20px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`
const ConstInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-left: 30px;
    width: 50 vh;
`
const ConstInfo = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 15px;
    padding: 5px; 
`
const ConstTitle = styled.h2`
    color: #35858B;;
    /*text-decoration: underline;
    text-decoration-color: #35858B;*/
    margin-right: 10px;
`
const ConstContent = styled.h3`
    color: #222;
`
const Error = styled.span`
    font-size: 15px;
    margin: 0px 0 0px 20px;
    font-weight: 600;
    display: "flex";
    color: black;
    justify-content: "center";
`

const PasswordButton = styled.button`
    padding-left: 45px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 20px;
    width: 80 vh;
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    padding: 5px;
    background-color: #072227;
    border: 2px solid #4FBDBA;
    color: #fff;
    &:hover {
        background-color: #4FBDBA;
        border: 2px solid #AEFEFF;
        
  }
`
const UserProfile = () => {

    window.scrollTo(0, 0);

    const navigate = useNavigate();
    const classesImg = useStylesImg();

    const token = localStorage.getItem('token')

    if (!token) {
        navigate('/login', { replace: true })
    }

    const user = jwt.decode(token)
    console.log("got the first token:" + user)


    const [passChangeForm, setPassChangeForm] = useState(false);
    const [profilePic, setProfilePic] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');

    const imageHandler = (e) => {

        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfilePic(e.target.files[0])
                setErrorMessage("Ready to upload: Click ✓ to Complete!")
                setErrorMessage2("Or Click X to Discard!")

            }
        }
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0])



            //localStorage.clear()
            //localStorage.removeItem('token')
            //navigate('login', { replace: true })

            //setTimeout((window.location.href = '/profile'), 4000)
        }
    };

    async function ChangePicture(e) {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfilePic(e.target.files[0])
                setErrorMessage("Ready to upload: Click ✓ to Complete!")
                setErrorMessage2("Or Click X to Discard!")

            }
        }
        if (e.target.files[0]) {
            setProfilePic(e.target.files[0])



            //localStorage.clear()
            //localStorage.removeItem('token')
            //navigate('login', { replace: true })

            //setTimeout((window.location.href = '/profile'), 4000)
        }
        if (profilePic == '') {
            setErrorMessage("No image file is chosen!")
            setTimeout(
                setErrorMessage2("")
                , 3500
            )
            window.location.href = '/profile'
            //navigate('/homepage', { replace: true })
        }
        else {
            const formData = new FormData();
            formData.append('username', user.username)
            formData.append('profilePic', profilePic)

            //setTimeout(localStorage.removeItem('token'), 4000)

            const response = await axios.post('http://localhost:5000/user/updateProfilePicture', formData)

            if (response.data.status == 'ok') {
                //setTimeout(localStorage.setItem('token', response.data.user), 80000)
                //navigate('/login', { replace: true })
                //localStorage.clear()
                localStorage.removeItem('token')
                localStorage.setItem('token', response.data.user)
                navigate('/login');
            }
            if (response.data.status == 'errorPPupdate') {
                alert("Profile picture update procedure interrupted!")
            }
        }




    }

    const RemovePicture = () => {
        if (profilePic != '') {
            setErrorMessage("The image is discarded!")

            setTimeout(
                setErrorMessage2("")
                , 3500
            )
            window.location.href = '/profile'

        }

    }

    return (
        <Container>
            <Wrapper>
                <InfoContainer>
                    <ProfileContainer>
                        <form  encType='multipart/form-data'>
                            <ContainerImg>
                                <UploadLabel >
                                    <ImageUpload htmlFor="input">
                                        <CameraAltIcon sx={{ margin: "10px" }} /> <h5>Update Photo</h5>

                                    </ImageUpload>
                                    <Button type="submit" onClick={() => ChangePicture()} className={classesImg.button} >✔</Button>
                                    <Button type="reset" onClick={() => RemovePicture()} className={classesImg.button}>X</Button>
                                </UploadLabel>
                                <Error> {errorMessage} </Error>
                                <Error> {errorMessage2} </Error>
                                <ImgHolder>
                                    <Img src={require('../pictures/' + user.profilePic)} alt="" id="img" className="img" />
                                </ImgHolder>
                                <InputImg type="file" accept=".png, .jpg, .jpeg" name="profilePic" id="input" />
                            </ContainerImg>

                        </form>
                        <ConstInfoContainer>
                            <ConstInfo><ConstTitle>Name: </ConstTitle><ConstContent>{user.name} {user.surname}</ConstContent></ConstInfo>
                            <ConstInfo><ConstTitle>Username: </ConstTitle><ConstContent>{user.username}</ConstContent></ConstInfo>
                            <ConstInfo><ConstTitle>E-mail: </ConstTitle><ConstContent>{user.email}</ConstContent></ConstInfo>
                            <PasswordButton onClick={() => setPassChangeForm(true)}>Change Password <EditIcon style={{ paddingLeft: "5px" }} /></PasswordButton>
                            <PassChangeForm trigger={passChangeForm} setTrigger={setPassChangeForm} />
                        </ConstInfoContainer>

                    </ProfileContainer>
                </InfoContainer>

                <PersonalAdDashboard username={user.username} />

            </Wrapper>
        </Container>

    )

}

export default UserProfile;