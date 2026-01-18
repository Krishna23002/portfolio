import React from 'react'

const Navbar = () => {
  const handleClick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
  } 

  return (
    <div>
      <nav>
        <h1>Portfolio</h1>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="burger" onClick={handleClick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
