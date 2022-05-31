import styled from "styled-components"
import React, { Component } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import userPlaceHolder from '../pictures/user.png'

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
	/*border: 3px black solid;*/
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
const Input = styled.input.attrs({ 
	type: 'file',
  })`

	display: none;
  `
  

export class App extends Component {

  
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };

	render() {
		return (
			<Container>
				<ImgHolder>
					<Img src={userPlaceHolder} alt="" id="img" className="img" />
				</ImgHolder>
					<Input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				<UploadLabel>
				<ImageUpload htmlFor="input">
					<CameraAltIcon sx={{margin: "10px"}} /> <h5>Choose your photo</h5></ImageUpload>
				</UploadLabel>
			</Container>
		);
	}
}

export default App;