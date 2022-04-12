import React from 'react'

function Button(props) {
  return (
    <div className='btns'>
    <button className='btn1'>{props.text1}</button>
    <button className='btn2'>{props.text2}</button>
    </div>
  )
}

export default Button