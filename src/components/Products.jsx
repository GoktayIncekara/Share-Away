import styled from "styled-components"
import Product from "./Product"
import axios from "axios"
import React, { useEffect, useState } from 'react';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Products = ({category,filters,sort}) => {
  window.scrollTo(0, 0);
  //console.log({category,filters,sort})
  const[products,setProducts] = useState([]);
  const[filteredproducts,setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( 
          category ? 'http://localhost:5000/products?category=' + category 
        : 'http://localhost:5000/products' );
        console.log(res)
        setProducts(res.data)
      } catch (error) {}
    };
    getProducts()
  } , [category])

  useEffect(() => {
    category && setFilteredProducts( 
      products.filter((item) => Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )));
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else  {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.createdAt - a.createdAt)
      );
    } 

  }, [sort]);

  return (
    <Container>
        {/* popularProducts.map((item) */filteredproducts.map((item) => (
            <Product item= {item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products