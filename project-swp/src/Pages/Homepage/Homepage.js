import React from 'react'
import Header from '../../Components/Header/Header'
// import Footer from '../../footer/Footer'
import Carousel from '../../Components/carousel/Carousel'
import './Homepage.css'
import ContentUpperHomepage from '../../Components/contentUpperHomepage/ContentUpperHomepage'
export default function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <Carousel />
      <ContentUpperHomepage/>
      {/* <Footer /> */}

    </div>
  )
}
