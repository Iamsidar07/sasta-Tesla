import React from 'react'

function TitleText(props) {
  return (
    <div className='title-text'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default TitleText