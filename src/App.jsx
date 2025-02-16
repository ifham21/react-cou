import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Course from './Course/Course'
import Footer from './Footer'
import htmlimg from './assets/html.jpg'
import cssimg from './assets/css.jpg'
import jsimg from './assets/js.png'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Course course='HTML' price={20} image={htmlimg} />
      <Course course='CSS' price={20} image={cssimg} />
      <Course course='Javascript' price={30} image={jsimg} />
      {/* <Footer /> */}
    </>
  )
}

export default App
