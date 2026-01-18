import React from 'react';
import Card from '../Component/Card';

const Project = () => {
  return (
    <div className='project-section' id='projects'>
      <h1>Projects</h1>
      <div className='project-list'>
        <Card
            title="MERN Todo App"
            description="A full-stack task management application built with the MERN stack, featuring CRUD operations, RESTful APIs, and a responsive React frontend."
            image={`${process.env.PUBLIC_URL}/img1 (2).png`}
            url="https://merntodoappbuild.netlify.app/"
        />
        <Card   
            title="Home Rental Website"
            description="A full-stack home rental web application enabling property browsing and listing management, built with secure authentication, scalable backend APIs, and a modern responsive UI."
            image={`${process.env.PUBLIC_URL}/img2.png`}
            url="https://quickrents.netlify.app/"
        />
        <Card
            title="Personal Portfolio Website"
            description="A modern and responsive personal portfolio website developed using React, highlighting my projects, skills, and professional background with clean UI and smooth navigation."
            image={`${process.env.PUBLIC_URL}/img3.png`}
        />
    </div>
    </div>
  )
}

export default Project
