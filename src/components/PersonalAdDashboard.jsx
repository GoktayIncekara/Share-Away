import styled from "styled-components"
import React from 'react';
import { Link } from "react-router-dom"
import { popularProducts } from "../data"
import  Product from './Product';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Wrapper= styled.div`
`
const AdContainer = styled.div`
    background-color: rgb(53, 133, 139, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`
const MainTitle=styled.h1`
    color: #333;
    padding: 20px 15px;

`
const MainHeader =styled.div`
    background-color:  rgb(53, 133, 139, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const AdDashboard =styled.div`
    padding: 40px 90px  0 120px;  
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
`
const AddProductConatiner= styled.div`
    height: 200px;
    width: 200px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    
`
const IconCaption= styled.h2`
    text-decoration: underline;
`

const PersonalAdDashboard = () => {
  return (
    <Wrapper>
    <MainHeader>
    <MainTitle>Your Products</MainTitle>
    </MainHeader>

    <AdContainer>
        <AdDashboard>
            {popularProducts.map((item) => (
                    <Product item= {item} key={item.id}/>
                ))} 
        </AdDashboard>

        <AddProductConatiner>
                <AddCircleOutlineIcon  sx={{ fontSize: 150}} />
                <IconCaption>Add New Product</IconCaption>
        </AddProductConatiner>

    </AdContainer>
    </Wrapper>
  )
}

export default PersonalAdDashboard