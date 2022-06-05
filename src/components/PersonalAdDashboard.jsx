import styled from "styled-components"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import Product from './Product';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from "axios"

const Wrapper = styled.div`
`
const AdContainer = styled.div`
    background-color: rgb(53, 133, 139, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
`
const MainTitle = styled.h1`
    color: #333;
    padding: 20px 15px;
`
const MainHeader = styled.div`
    background-color:  rgb(53, 133, 139, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const AdDashboard = styled.div`
    padding: 40px 90px  0 120px;  
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;   
`
const AddProductConatiner = styled.div`
    height: 200px;
    width: 200px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    
`
const IconCaption = styled.h2`
    text-decoration: underline;
`

const PersonalAdDashboard = ({ username }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/products?username=' + username);
                console.log(res)
                setProducts(res.data)
            } catch (error) { }
        };
        getProducts()
    }, [username])

    return (
        <Wrapper>
            <MainHeader>
                <MainTitle>Your Products</MainTitle>
            </MainHeader>

            <AdContainer>
                <AdDashboard>
                    {products.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </AdDashboard>

                <Link style={{ textDecoration: 'none' }} to={`/addProduct`}>
                    <AddProductConatiner>
                        <AddCircleOutlineIcon sx={{ fontSize: 150 }} />
                        <IconCaption>Add New Product</IconCaption>
                    </AddProductConatiner>
                </Link>

            </AdContainer>
        </Wrapper>
    )
}

export default PersonalAdDashboard