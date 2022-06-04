import styled from "styled-components"
import React, { useState, useEffect} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import userPlaceHolder from '../pictures/user.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import jwt from 'jsonwebtoken';

const Container = styled.div`
    width: 300px;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
	padding: 20px;
`
const ImgHolder = styled.div`
    margin: auto;
    width: 200px;
    height: 200px;
	  border-radius: 50%;
    border-radius: 5px;
    margin-top: 1rem;
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
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`
const Img =styled.img`
	width: 200px;
    height: 200px;
	border-radius: 50%;
    object-fit: cover;
`
const UploadButtons =styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`
const Input = styled.input.attrs({ 
	type: 'file',
  })`

	display: none;
  `
const ProfilePhotoUpload = () => {

    const [clicked, setClicked] = useState(false);
    const [profileImg, setProfileImg] = useState(userPlaceHolder);

    const user = jwt.decode(localStorage.getItem('token'));

  const imageHandler = (e) => {

    setClicked(true);
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setProfileImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

  const handleClick = ()=>{
    localStorage.removeItem('profilePic');
  }

  const approvePhoto=(e) =>{

      console.log("approved");
      localStorage.setItem("profilePic", (profileImg));
      setProfileImg(localStorage.getItem("profilePic"));
      setClicked(false);
      //upload photo to the database
  }

  console.log("LOCALSTROGA PP ppu",localStorage.getItem("profilePic") )

  const cancelPhoto=(e) =>{

    setClicked(false);
    setProfileImg(userPlaceHolder);
    localStorage.removeItem('profilePic');
  }

  console.log(clicked);

		return (
			<Container>
      	<UploadLabel >
				<ImageUpload htmlFor="input" onClick={handleClick}>
					<CameraAltIcon sx={{margin: "10px"}} /> <h5>Choose your photo</h5></ImageUpload>
				</UploadLabel>

				<ImgHolder>
					<Img src={localStorage.hasOwnProperty("profilePic") ? localStorage.getItem("profilePic"): localStorage.hasOwnProperty("token")? user.profilePic: profileImg} alt="" id="img" className="img" />
				</ImgHolder>
					<Input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

        {clicked ? 
        <UploadButtons>
        <CheckCircleOutlineIcon sx={{ fontSize: 50, marginRight: "10px", }} onClick={approvePhoto}/>
        <HighlightOffIcon sx={{ fontSize: 50 }} onClick={cancelPhoto}/>
        </UploadButtons>
        : ""}

			</Container>
		);
	}

export default ProfilePhotoUpload;