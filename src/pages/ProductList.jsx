import styled from "styled-components"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Report from "../components/Report"
import Footer from "../components/Footer"
import {mobile} from "../responsive"

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
  return (
    <Container>
        <Navbar />
        <Title>CATEGORY</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>City</Option>
                    <Option>İstanbul</Option>
                    <Option>İzmir</Option>
                    <Option>Ankara</Option>
                    <Option>Antalya</Option>
                    <Option>Fethiye</Option>
                    <Option>Mersin</Option>
                    <Option>Adana</Option>
                    <Option>Kars</Option>
                    <Option>Sinop</Option>
                </Select>
                <Select>
                    <Option disabled selected>Delivery</Option>
                    <Option>By hand</Option>
                    <Option>By post</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Oldest</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Report />
        <Footer />
    </Container>
  )
}

export default ProductList