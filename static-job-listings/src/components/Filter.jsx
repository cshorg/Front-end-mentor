import { useState } from 'react'

function Filter({ item, handleRemove, index }) {
  return (
		<div className='filter'>
            <div className='filter-lang'>{item}</div>
            <div className='filter-remove' onClick={() => handleRemove(index)}>X</div>
		</div> 
	)
}

export default Filter
