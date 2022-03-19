import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Footer />
    </div>
  )
}

export default Home