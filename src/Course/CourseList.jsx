import React from "react";
import htmlimg from "../assets/html.jpg";
import cssimg from "../assets/css.jpg";
import jsimg from "../assets/js.png";
import Course from "./Course";

const CourseList = () => {
  const courses = [
    {
      name: "HTML",
      price: "$20",
      image: htmlimg,
      rating: 5,
    },
    {
      name: "CSS",
      price: "$20",
      image: cssimg,
      rating: 5,
    },
    {
      name: "Javascript",
      price: "$30",
      image: jsimg,
      rating: 5,
    },
    {
      name: "React",
      price: "$70",
      image: jsimg,
      rating: 5,
    },
  ];

  const courseList = courses.map((course, index) => {
    return (
      <Course
        name={course.name}
        image={course.image}
        price={course.price}
        rating={course.rating}
        key={index}
      />
    );
  });

  return (
    <>
        {courseList}
    </>
  )
};

export default CourseList;
