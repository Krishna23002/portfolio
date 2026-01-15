import React from 'react';
import Card from '../Component/Card';

const Project = () => {
  return (
    <div className='project-section' id='projects'>
      <h1>Projects</h1>
      <div className='project-list'>
        <Card
            title="Personal Portfolio Website"
            description="A personal portfolio website built with React to showcase my projects and skills."
            image="/proj-img1.jpg"
        />
        <Card   
            title="E-commerce Store"
            description="An online store built with Node.js and Express, featuring user authentication and payment integration."
            image="/proj-img1.jpg"
        />
        <Card
            title="Chat Application"
            description="A real-time chat application using Socket.io and React for seamless communication."
            image="/proj-img1.jpg"
        />
    </div>
    </div>
  )
}

export default Project
