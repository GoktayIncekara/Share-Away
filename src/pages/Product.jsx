import styled from "styled-components"
import Navbar from "../components/Navbar"
import Report from "../components/Report"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail"
import React from 'react';

const Container = styled.div`
`

const Product = () => {
 

  return (
    <Container>
        <Navbar />
        <ProductDetail />
        <Report />
        <Footer />
    </Container>
  )
}

export default Product