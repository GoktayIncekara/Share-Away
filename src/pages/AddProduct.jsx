import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Report from '../components/Report'
import ProductForm from '../components/ProductForm'

const AddProduct = () => {
    return (
      <div>
        <Navbar />
        <ProductForm />
        <Report />
        <Footer />
      </div>
    )
  }
  
  export default AddProduct