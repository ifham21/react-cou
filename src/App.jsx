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
      <Course course='HTML' price={20} image={htmlimg} rating={5} show={true} />
      <Course course='CSS' price={20} image={cssimg} rating={5} show={true} />
      <Course course="Javascript" price={30} image={jsimg} rating={5} show={true} />
      <Course />
      {/* <Footer /> */}
    </>
  )
}

export default App
