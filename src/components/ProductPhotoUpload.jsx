import styled from "styled-components"
import React, { useState, useEffect} from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ProductPlaceHolder from '../pictures/product.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
	padding: 20px;
`
const UploadContainer= styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;

`

const ImgHolder = styled.div`
    margin: auto;
    width: 300px;
    height: 250px;
	  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 0 30px;

`
const ImageUpload = styled.label`
    color: white;
    border-radius: 20px;
    background-color: #072227;
    text-align: center;
    cursor: pointer;
  	display: flex;
    flex-direction: column;
	  justify-content: center;
  	align-items: center;
    padding: 10px;
`
const UploadLabel = styled.div`
    display: flex;
    justify-content: center;
    
`
const Img =styled.img`
	width: 300px;
    height: 250px;
    object-fit: cover;
`
const UploadButtons =styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 10px 0;
`

const Input = styled.input.attrs({ 
	type: 'file',
  })`

	display: none;
  `
const ImageAlbum = styled.div`
  background-color:  rgb(0,0,0, 0.2); 
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
const Wrapper =styled.div``


const UploadedImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 15px;
`
const PhotoWrapper = styled.div``
  
  
  const ProfilePhotoUpload = () => {
    const [imageArr, setImageArr] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [currentImg, setCurrentImg] = useState(ProductPlaceHolder);
    
  const imageHandler = (e) => {
    setClicked(true);
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setCurrentImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };


  const approvePhoto=(e) =>{
      console.log("approved");
      setCurrentImg(ProductPlaceHolder);
      setImageArr(oldArr => [...oldArr, currentImg]);
      setClicked(false);
  }

  const cancelPhoto=(e) =>{
    setClicked(false);
    setCurrentImg(ProductPlaceHolder);
  }

		return (
			<Container>
      <UploadContainer>
      <div>
        <ImgHolder>
            <Img src={currentImg} alt="" id="img" className="img" />
          </ImgHolder>
          <Input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

        {clicked ? 
        <UploadButtons >
        <CheckCircleOutlineIcon sx={{ fontSize: 60, marginRight: "15px", }} onClick={approvePhoto}/>
        <HighlightOffIcon sx={{ fontSize: 60 }} onClick={cancelPhoto}/>
        </UploadButtons>
        : ""}
        </div>

          

        <Wrapper>
      	<UploadLabel >
				<ImageUpload htmlFor="input" >
				 <h4>Choose Your Product Photo</h4>	<CameraAltIcon sx={{margin: "5px", fontSize: 30}} /></ImageUpload>
				</UploadLabel>

        </Wrapper>
        </UploadContainer>

        <ImageAlbum>
          {imageArr.map((item) => (
            <PhotoWrapper>
            <UploadedImg src={item}/>
            </PhotoWrapper>
            ))}
        </ImageAlbum>
         
			</Container>
		);
	}

export default ProfilePhotoUpload;