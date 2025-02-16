import React from 'react'

const Course = ({course, price, image}) => {

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