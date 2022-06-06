import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from "../components/Footer"
import Report from '../components/Report'
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import jwt from 'jsonwebtoken'

const Home = () => {

  const navigate = useNavigate();
 
  useEffect(() => {

    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/', { replace: true })
    }

    else {
      const user = jwt.decode(token)
      if (!user) {
        localStorage.removeItem('token')
        localStorage.clear()
        navigate('/', { replace: true })
      }
      console.log(user)
    }
    
  }, [])

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