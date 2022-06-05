import React from 'react';
import { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive"
import { Button, makeStyles } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { turkeyData } from "../cityDistrict"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ProductPlaceHolder from '../pictures/product.png'
import axios from 'axios';


const ContainerPhoto = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color:  rgb(53, 133, 139, 0.2); 
	padding: 20px;
`
const UploadContainer = styled.div`
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
const Img = styled.img`
	width: 300px;
    height: 250px;
    object-fit: cover;
`

const InputImg = styled.input.attrs({
    type: 'file',
})`

	display: none;
  `


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
const InputTitle = styled.label`
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

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [districtArr, setDistrictArr] = useState([]);
    const [shipping, setShipping] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const CategoryArr = ["Furniture", "Men", "Women", "Technology", "Home", "Books", "Baby-Kid", "Fun", "Travel", "School", "Elderly", "Other"];

    const [productPicture, setProductPicture] = useState('');
    const [currentImg, setCurrentImg] = useState(ProductPlaceHolder);

    const imageHandler = (e) => {

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setCurrentImg(reader.result)
                setProductPicture(e.target.files[0])
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    async function addProduct(e) {
        e.preventDefault()

        if (title < 3) {
            alert("Title should be at least 3 characters long!")
            setTitle('')
        }
        else {
            const formData = new FormData();

            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('shipping', shipping);
            formData.append('city', city);
            formData.append('district', district);
            formData.append('productPicture', productPicture);
            formData.append('token', localStorage.getItem('token'))

            const response = await axios.post('http://localhost:5000/user/addProduct', formData)

            if (response.data.status === 'ok') {
                resetForm();
                navigate('/Profile');
            }
            if (response.data.status === 'error') {
                setErrorMessage("User session ended!");
            }
        }
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

    const changeCity = (e) => {
        setCity(e.target.value);
        setDistrictArr((turkeyData.find((selectedCity) => selectedCity.il_adi === e.target.value)).ilceler);
    }

    return (
        <main>
            <Container>
                <Wrapper>
                    <Title> ADD PRODUCT </Title>

                    <Form onSubmit={addProduct} encType='multipart/form-data'>

                        <ContainerPhoto>
                            <UploadContainer>
                                <div>
                                    <ImgHolder>
                                        <Img src={currentImg} alt="" id="img" className="img" />
                                    </ImgHolder>
                                    <InputImg type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />

                                </div>

                                <Wrapper>
                                    <UploadLabel >
                                        <ImageUpload htmlFor="input" >
                                            <h4>Choose Your Product Photo</h4>	<CameraAltIcon sx={{ margin: "5px", fontSize: 30 }} /></ImageUpload>
                                    </UploadLabel>

                                </Wrapper>
                            </UploadContainer>

                        </ContainerPhoto>

                        <InputBox>
                            <InputTitle>Title</InputTitle>
                            <Input placeholder="Title" required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </InputBox>

                        <InputBox>
                            <InputTitle>Description</InputTitle>
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
                            <InputTitle for="shipping">Shipping Options</InputTitle>
                            <Select name="shipping" id="ship" placeholder='Shipping Options' value={shipping} onChange={(e) => setShipping(e.target.value)}  >
                                <option value="By-courier">By Cargo</option>
                                <option value="By-hand">Pick up</option>
                                <option value="Both">Both Cargo and Pick-up</option>
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
                            <InputTitle for="district">District</InputTitle>
                            <Select name="district" id="dist" placeholder='District' value={district} onChange={(e) => setDistrict(e.target.value)}  >
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