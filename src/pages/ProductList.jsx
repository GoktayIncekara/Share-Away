import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Report from "../components/Report"
import Footer from "../components/Footer"
import {mobile} from "../responsive"
import React , { useState } from 'react';
import { useLocation } from "react-router-dom"
import {turkeyData} from "../cityDistrict"

const Container = styled.div`
    
`
const Title = styled.h1`
    margin-top: 14vh;
    text-align: center;
    color: #35858B;
`
const FilterContainer = styled.div`
    margin-top: 5vh;
    display:flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})};
`
const Filter = styled.div`
    margin: 0px 20px;
    ${mobile({display: "flex", marginBottom:"20px",alignItems:"center"})};
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({width:"26%"})};
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option`

`

const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name] : value})
    } 

    //console.log(filters)

    return (
    <Container>
        <Navbar />
        <Title> {category.toUpperCase()} </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name = "city" onChange={handleFilters}>
                    {turkeyData.map((item) => (
                             <option value={item.il_adi}>{item.il_adi}</option>
                            ))}     
                </Select>
                <Select name = "shipping" onChange={handleFilters}>
                    <Option disabled >Delivery</Option>
                    <Option>By-hand</Option>
                    <Option>By-courier</Option>
                    <Option>Both</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={(e)=> setSort(e.target.value)}>
                    <Option value ="newest">Newest</Option>
                    <Option value ="oldest">Oldest</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products category = {category} filters ={filters} sort ={sort}/>
        <Report />
        <Footer />
    </Container>
  )
}

export default ProductList