import React from 'react'
import htmlimg from './assets/html.jpg'
import cssimg from './assets/css.jpg'
import jsimg from './assets/js.png'

const CourseList = () => {

    const courses = [
        {
            course: 'HTML',
            price: '$20', 
            image: htmlimg, 
            rating: 5,
        },
        {
            course: 'CSS',
            price: '$20', 
            image: cssimg, 
            rating: 5,
        },
        {
            course: 'Javascript',
            price: '$30', 
            image: jsimg, 
            rating: 5,
        },

    ]

    const courseList = courses.map((course, index) => {
        return(
            <Course name={course.name} image ={course.image} price={course.price} rating={course.rating} />
        )
    })

  return (
    <div>CourseList</div>
  )
}

export default CourseList