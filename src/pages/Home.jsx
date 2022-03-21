import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from "../components/Footer"
import Report from '../components/Report'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Report />
      <Footer />
    </div>
  )
}

export default Home