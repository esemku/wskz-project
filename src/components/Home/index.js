import React from 'react'
import './Home.scss'

import SideNav from './SideNav'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'


const Home = () => {
  return (
    <div className='app-wrapper'>

      <div className='side-nav-wrapper'>
        <SideNav />
      </div>

      <div className='container'>
        <Header />
        <Form />
        <Footer />
      </div>

    </div>
  )
}


export default Home
