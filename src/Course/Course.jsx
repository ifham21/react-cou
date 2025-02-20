import React from 'react'
import HTML from '../assets/html.jpg'

const Course = ({course = "To be announce", price = "To be announce", image = HTML, rating = 0, show = true }) => {

  //Contional rendering
  if(show){
    return (
      <div className='card'>
          <img src={image} alt="" />
          <h3>{course}</h3>
          <h4>{price}</h4>
          <p>This is {course} Course</p>
          <span>Rating: {rating}</span>
      </div>
    )
  } else {
    return(
      <div className='card'>
        <p>Course Not available</p>
      </div>
    )
  }
  
}

export default Course