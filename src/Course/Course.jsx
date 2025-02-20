import React from 'react'
import HTML from '../assets/html.jpg'

const Course = ({name = "To be announce", price = "To be announce", image = HTML, rating = 0, login = true }) => {

  //Contional rendering
  if(login){
    return (
      <div className='card'>
          <img src={image} alt="" />
          <h3>{name}</h3>
          <h4>{price}</h4>
          <p>This is {name} Course</p>
          <span>Rating: {rating}</span>
      </div>
    )
  } 
  // else {
  //   return(
  //     <div className='card'>
  //       <p>Course Not available</p>
  //     </div>
  //   )
  // }
  
}

export default Course