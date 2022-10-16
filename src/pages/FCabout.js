import React from 'react'
import { useNavigate } from 'react-router'

export default function FCabout() {
  const navigate = useNavigate();
  return (
    <>
      <div className='about'>
        <h1 style={{margin: "8px"}}>Memory games?</h1>
        Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games can improve visual recognition. With many memory games based on spotting differences, or linking two related images, children improve their visual discrimination
      </div>
      <div className='button-div'>
        <button className='button' onClick={() => navigate("/")}>Back to home</button>
      </div>
    </>
  )
}
