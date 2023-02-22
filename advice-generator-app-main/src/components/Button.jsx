import { useState } from 'react'

function Button({ handleClick }) {

  return (
    <div className='button'>
			<button onClick={handleClick}></button>
    </div>
  )
}

export default Button
