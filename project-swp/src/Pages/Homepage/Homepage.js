import React from 'react'
import Header from '../../Components/Header/Header'
// import Footer from '../../footer/Footer'
import Carousel from '../../Components/carousel/Carousel'
import './Homepage.css'
import ContentUpperHomepage from '../../Components/contentUpperHomepage/ContentUpperHomepage'
import ContentMiddleHomepage from '../../Components/contentMiddleHomepage/ContentMiddleHomepage'
import ContentLowerHomepage from '../../Components/contentLowerHomepage.js/ContentLowerHomepage'
import Footer from '../../Components/footer/Footer'
export default function Homepage() {
  return (
    <div className='homepage'>
      <Header />
      <Carousel />
      <ContentUpperHomepage/>
      <ContentMiddleHomepage/>
      <ContentLowerHomepage/>
      <Footer/>
    </div>
  )
}
