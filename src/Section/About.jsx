import React from 'react';
import Card from '../Component/Card';

const About = () => {
    return (
        <div className="about-section" id='about'>
            <h1>About Me</h1>
            <div className="about-content">
                <p>I am Krishnakumar Arjun, a Computer Science student with a passion for web development. I love creating beautiful and functional websites that provide great user experiences. In my free time, I enjoy learning new technologies and improving my coding skills.</p>
            </div>
            <Card title="Education" description="B.Sc. in Computer Science from Mumbai University"/>
            <Card title="Skills" description="HTML, CSS, JavaScript, React, Node.js, Express, MongoDB"/>
            <Card title="Hobbies" description="Coding, Reading Tech Blogs, Watching Movies, Traveling"/>
        </div>
    )
}

export default About
