import React from 'react'

const Card = (props) => {
  return (
    <div className="box">
      <div className='card'>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.image} alt={props.desc} style={{ cursor: 'pointer' }} />
        </a>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
