import { useState } from 'react'

function Button({ handleClick }) {

  return (
    <div className='button'>
			<button onClick={handleClick}> <img src="public/images/icon-dice.svg" alt="" /></button>
    </div>
  )
}

export default Button
