import React from 'react'
import { useNavigate } from 'react-router';
import FCcards from '../Components/FCcards';

export default function FChome() {
  const navigate = useNavigate();
  return (
    <div className='home'>
      <h1>Memory Game</h1>
      <div className='container'>
        <FCcards />
      </div>
      <div className='button-div'>
        <button className='button' onClick={() => navigate("/About")}>About</button>
      </div>
    </div>
  )
}
