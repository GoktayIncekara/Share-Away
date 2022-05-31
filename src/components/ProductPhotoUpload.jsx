import styled from "styled-components"
import React, { Component } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import userPlaceHolder from '../pictures/user.png'

const Container = styled.div`
    width: 100%;
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
    width: 30%;
    height: 8vh;
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
    margin: 0.5rem 0;
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
  state={
    profileImg:'http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
  }
  
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    console.log("(event.target.files[0])", (e.target.files[0]))
    reader.readAsDataURL(e.target.files[0])
  };

	render() {
    const { profileImg} = this.state
		return (
			<Container>
            <UploadLabel>
            <ImageUpload htmlFor="input"><CameraAltIcon sx={{margin: "10px"}} /> <h4>Choose Product Photo</h4></ImageUpload>
            </UploadLabel>

            <ImgHolder>
                <Img src={profileImg} alt="" id="img" className="img" />
            </ImgHolder>

			<Input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				
				
				
			</Container>
		);
	}
}

export default App;