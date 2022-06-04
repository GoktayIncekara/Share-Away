import styled from "styled-components"
import React, { useState, useEffect } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ProfilePlaceHolder from '../pictures/user.png'

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
    width: 20vw;
    height: 15vw;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
	  padding: 10px 20px;
    margin: 5px 0 8px 0;

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

const ProfilePhotoUpload = () => {
  const classesImg = useStylesImg();
  const [profileImg, setProfileImg] = useState(ProfilePlaceHolder);

  const imageHandler = (e) => {

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result)
        localStorage.setItem("profilePic", (e.target.files[0]))
        console.log(e.target.files[0])
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  const RemovePicture = () => {
    localStorage.clear()
    setProfileImg(ProfilePlaceHolder)
    localStorage.setItem("profilePic", (profileImg))
    console.log(profileImg)
  }


  return (
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
  );
}

export default ProfilePhotoUpload;