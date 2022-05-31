import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import {mobile} from "../responsive"
import React from 'react';


const Container = styled.div`
  
`
const CategoriesContainer = styled.div`
    display: flex;
    padding: 30px 200px;
    flex-wrap: wrap;
    justify-content: center;
    ${mobile({padding: "10px", flexDirection: "column"})};
`
const Title = styled.h1`
    font-weight: 800;
    font-size: 1000;
    color: #35858B;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 40px;
    ${mobile({marginTop: "50px", marginBottom: "10px"})};
`

const Categories = () => {
  return (
    <Container>
        <Title> Categories </Title>
        <CategoriesContainer>
            {categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
            ))}
        </CategoriesContainer>
        
    </Container>
  )
}

export default Categories