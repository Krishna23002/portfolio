import React from 'react'

const Card = (props) => {
  return (
    <div className="box">
      <div className='card'>
        {props.image && <img src={props.image} alt={props.title} />}
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
