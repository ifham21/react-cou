import React from 'react'
import HTML from '../assets/html.jpg'

const Course = ({course = "To be announce", price = "To be announce", image = HTML}) => {

  return (
    <div className='card'>
        <img src={image} alt="" />
        <h3>{course}</h3>
        <h4>${price}</h4>
        <p>This is {course} Course</p>
    </div>
  )
}

export default Course